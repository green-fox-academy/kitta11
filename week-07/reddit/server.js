'use strict';
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const time = require("time-since");

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ZORRAverde911',
  database: 'reddit',
});

app.use('/assets', express.static('assets'));

connection.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/posts', (req, res) => {
  let basicquery = `select id, title, url, score, username, timestamp from posts INNER JOIN users ON posts.owner_id=users.user_id`;
  connection.query(basicquery, (err, posts) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      posts,
    })
  })
})

const insertPost = (title, url, owner_id) => {
  connection.query(`INSERT INTO posts (title, url, owner_id) VALUES ('${title}', '${url}', ${owner_id})`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    } else {
      console.log(`Data were inserted into the database: ${result}`)
    }
  })
}

const deletePost = (id) => {
  connection.query(`DELETE from posts WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    } else {
      console.log(`Data were deleted from the database: ${result}`)
    }
  })
}

// const getRecordbyID = (post_id) => {
//   // let newRecord = {};
//   connection.query(`SELECT * from posts WHERE id=${post_id}`, (err, result) => {
//     if (err) {
//       console.log(err.toString());
//       return;
//     }
//     newRecord = {
//       id: result[0].id,
//       title: result[0].title,
//       url: result[0].url,
//       score: result[0].score
//     }
//     // console.log(newRecord)
//     return newRecord
//   })
//   return newRecord
// }

// console.log(getRecordbyID(18));
// getRecordbyID(18);


app.post('/api/posts', jsonParser, (req, res) => {
  if (req.body.title && req.body.url && req.body.owner_id) {
    let title = req.body.title;
    let url = req.body.url;
    let owner_id = req.body.owner_id;
    insertPost(title, url, owner_id);
    let newRecord = {};
    connection.query(`select title, url, score, timestamp, username from posts INNER JOIN users ON posts.owner_id=users.user_id WHERE title LIKE '${title}'`, (err, result) => {
      if (err) {
        console.log(err.toString());
        return;
      }
      newRecord = result[0];
      console.log(newRecord)
      res.json({
        "id": newRecord.id,
        "title": newRecord.title,
        "url": newRecord.url,
        "timestamp": newRecord.timestamp,
        "score": newRecord.score,
        "owner": newRecord.username,
      });
    })
  } else {
    console.log(`data was not provided`)
  }
})


app.put('/api/posts/:id/upvote', jsonParser, (req, res) => {
  let post_id = req.params.id;
  let queryID = `select title, url, score, timestamp, username from posts INNER JOIN users ON posts.owner_id=users.user_id WHERE id=${post_id}`
  connection.query(`UPDATE posts SET score = score+1 WHERE id=${post_id}`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    }
  })

  let newRecord = {};
  connection.query(queryID, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    newRecord = result[0];
    // console.log(newRecord)
    res.json({
      "id": newRecord.id,
      "title": newRecord.title,
      "url": newRecord.url,
      "timestamp": newRecord.timestamp,
      "score": newRecord.score,
      "owner": newRecord.username,
    });
  })
  //i dont get why I can not outsource this to a function
  //getRecordbyID(post_id);
})

app.put('/api/posts/:id', jsonParser, (req, res) => {
  let post_id = req.params.id;
  let queryID = `select title, url, score, timestamp, username from posts INNER JOIN users ON posts.owner_id=users.user_id WHERE id=${post_id}`
  let title = req.body.title;
  let url = req.body.url;
  let queryupdate = `UPDATE posts SET `;
  let querycond = `WHERE id=${post_id}`;
  let setTitle = `title = '${title}'`;
  let setUrl = `url = '${url}'`;
  let query = {};

  if (title && url) {
    query = `${queryupdate}${setTitle}, ${setUrl} ${querycond}`;
  } else {
    console.log(`please provide enough data for the update`)
  }
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    }
  })

  let newRecord = {};
  connection.query(queryID, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    newRecord = result[0];
    console.log(newRecord)
    res.json({
      "id": newRecord.id,
      "title": newRecord.title,
      "url": newRecord.url,
      "timestamp": newRecord.timestamp,
      "score": newRecord.score,
      "owner": newRecord.username,
    });
  })
})

app.put('/api/posts/:id/downvote', jsonParser, (req, res) => {
  let post_id = req.params.id;
  let queryID = `select title, url, score, timestamp, username from posts INNER JOIN users ON posts.owner_id=users.user_id WHERE id=${post_id}`;
  connection.query(`UPDATE posts SET score = score-1 WHERE id=${post_id}`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    }
  })
  let newRecord = {};
  connection.query(queryID, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    newRecord = result[0];
    console.log(newRecord)
    res.json({
      "id": newRecord.id,
      "title": newRecord.title,
      "url": newRecord.url,
      "timestamp": newRecord.timestamp,
      "score": newRecord.score,
      "owner": newRecord.username,
    });
  })
})


app.delete('/api/posts/:id', jsonParser, (req, res) => {
  let post_id = req.params.id;
  let newRecord = {};
  connection.query(`SELECT * from posts WHERE id LIKE '${post_id}'`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    newRecord = result[0];
    deletePost(post_id);
    console.log(newRecord)
    res.json({
      "id": newRecord.id,
      "title": newRecord.title,
      "url": newRecord.url,
      "timestamp": newRecord.timestamp,
      "score": newRecord.score,
    });
  })
}
)

app.listen(PORT, () => {
  console.log(`el server esta corriendo en el port ${PORT}`)
});