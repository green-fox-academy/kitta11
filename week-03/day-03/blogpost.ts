'use strict';
export { };

class Blogpost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;
  constructor(authorName: string, title: string, text: string, publicationDate: string) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.publicationDate = publicationDate;
  }
}

let postOne: Blogpost = new Blogpost ('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2010.10.10');
let postTwo: Blogpost = new Blogpost ('Tim Urban', 'Wait but why',  'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.'
);
let postThree: Blogpost = new Blogpost ('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.'
);

console.log(postOne, postTwo, postThree);



