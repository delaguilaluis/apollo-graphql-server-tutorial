var connectors = require('./connectors')
var Author = connectors.Author

const resolvers = {
  Query: {
    author: function (_, args) {
      return Author.find({ where: args })
    },
    allAuthors: function (_, args) {
      return Author.findAll()
    }
  },
  Author: {
    posts: function (author) {
      return author.getPosts()
    }
  },
  Post: {
    author: function (post) {
      return post.getAuthor()
    }
  }
}

module.exports = resolvers
