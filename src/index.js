import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthorQuiz from "./AuthorQuiz";
import * as serviceWorker from "./serviceWorker";

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Comons',
    books: ['The Adventures of Hucleberry Finn']
  }
];

ReactDOM.render(
  <AuthorQuiz />, document.getElementById('root')
);
registerServiceWorker();

