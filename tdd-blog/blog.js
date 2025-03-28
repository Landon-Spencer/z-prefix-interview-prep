class Blog {
  constructor() {
    this.posts = [];
  }

  getBlogPosts () {
    let result;
    if (this.posts.length == 0) {
      result = `There are ${this.posts.length} blog posts`
    } else {
      result = this.posts.map((post) => post.title);
    }
    return result
  }

  addBlogPost (newPost, newAuthor = false, newGenre) {

    let postObject = {
      title: newPost,
      author: newAuthor,
      genre: newGenre,
      comments: []
    }

    // if (!postObject.author) {
    //   postObject.author = false;
    // } else {
    //   postObject.authors.push(newAuthor);
    // }

    this.posts.push(postObject);
  }

  getBlogAuthors () {
    let result = this.posts.map((post) => post.author)
    return result;
  }

  getSpecificBlogAuthor (blogPost) {
    let authorPost = this.posts.filter((post) => post.title == blogPost);
    // console.log(authorPost);
    let postAuthor = authorPost[0]?.author;
    // console.log(postAuthor);
    if (typeof postAuthor == 'string') {
      return postAuthor;
    } else if (postAuthor == false) {
      return 'Blog has no author';
    } else {
      return 'No such blog post';
    }
  }

  getBlogsFromGenre (genre) {
    let allPost = [];
    let genrePost = this.posts.filter((post) => post.genre == genre);
    genrePost.map((post) => {
      let filteredPost = {
        title: post.title,
        author: post.author,
        genre: post.genre
      }
      allPost.push(filteredPost);
    })
    return allPost;
  }

  getAllGenres () {
    let result = this.posts.map((post) => post.genre);
    if (result.length == 0) {
      return "There are no genres available"
    } else {
      return result;
    }
  }

  getComments (title) {
    let commentPost = this.posts.filter((post) => post.title == title);
    // console.log("getComments", commentPost[0].comments)
    return commentPost[0].comments;
  }

  getBlogComments (title) {
    if (this.getComments(title).length == 0) {
      return this.getComments(title)
    } else {
      // console.log(this.getComments(title));
      let result = [{comments: this.getComments(title)}];
      return result;
    }
  }

  addComment (title, user, comment) {
    let newComment = {
      user: user,
      comment: comment
    }
    this.getComments(title).push(newComment);
    // console.log("addComment", this.getComments(title));
  }

  getCommentsBy (username) {
    let result = {
      comments: [],
      user: username
    };
    this.posts.forEach((post) => {
      this.getComments(post.title).forEach((comment) => {
        if (comment.user == username) {
          result.comments.push({article: post.title, comment: comment.comment});
        }
      })
    })
    return result;
  }

  deleteBlog (title) {
    let allPosts = this.getBlogPosts();
    let index = allPosts.indexOf(title);
    this.posts.splice(index, 1);
  }

}

module.exports = Blog