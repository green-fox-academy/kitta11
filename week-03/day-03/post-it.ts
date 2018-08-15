'use strict'
export{};

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;
constructor (backgroundColor: string, text: string, textColor: string) {
  this.backgroundColor = backgroundColor;
  this.text = text;
  this.textColor = textColor;
}
}

let postItOrange: PostIt = new PostIt ('orange', 'Idea 1', 'blue');
let postItPink: PostIt = new PostIt ('pink', 'Awesome', 'black');
let postItYellow: PostIt = new PostIt ('yellow', 'Superb', 'green');

console.log(postItOrange, postItPink, postItYellow);

