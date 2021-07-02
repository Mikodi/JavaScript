'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const post1 = new AttachedPost("Samanta", "lorem ipsum", "26.07");
post1.edit("hello world");
post1.makeTextHighlighted();
console.log(post1);