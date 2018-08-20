import { Blogpost } from "./blogpost"
'use strict';

class Blog {
  postList: Blogpost[];

  constructor(){
    this.postList=[];
  }
  add (newPost: Blogpost){
    this.postList.push(newPost)
  }

  delete (int: number) {
    this.postList.splice(int-1, 1)
  }

  update (int: number, newPost: Blogpost) {
    this.postList.splice(int-1, 1, newPost)
  }
}

let myBlog: Blog = new Blog()
console.log(myBlog);

myBlog.add(new Blogpost ('Kittababa', 'My first post', 'Lorem ipsum dolor sit amet.', '2018.07.10'))
console.log(myBlog);
myBlog.add(new Blogpost ('Kittababa', 'My second post', 'Lorem pip dolor sit amet.', '2018.07.14'))
console.log(myBlog);
myBlog.add(new Blogpost ('Kittababa', 'My third post', 'Lorem pip dolor sit amet.', '2018.07.29'))
console.log(myBlog);
myBlog.delete(3);
console.log(myBlog);
myBlog.update(2, new Blogpost ('Kittababa', 'My second modified post', 'Lorem pipipi dolor sit amet.', '2018.07.15'))
console.log(myBlog);
