const loremIpsum = require('lorem-ipsum');

const title = () => {
    return output = loremIpsum({
        count: 3,
        units: 'words'
    })
};

const sentences = () => {
    return output = loremIpsum({
        count: 2,
        units: 'sentences'
    })
}

class BlogPost {
    constructor() {
        this.id = Math.floor(Math.random*100);
        this.title = title();
        this.text = sentences()
    }
}

const createPost = (num) => {
    let posts = [];

    for (let i = 0; i < num; i++) {
        posts.push(new BlogPost());
    }

    return JSON.stringify(posts);
}

module.exports = createPost;
