var connectors = require('./connectors')
var Author = connectors.Author
var FortuneCookie = connectors.FortuneCookie

const resolvers = {
  Query: {
    author: function author (_, args) {
      return Author.find({ where: args })
    },
    allAuthors: function allAuthors (_, args) {
      return Author.findAll()
    },
    getFortuneCookie: function getFortuneCookie (_, args) {
      return FortuneCookie.getOne()
    }
  },
  Author: {
    posts: function posts (author) {
      return author.getPosts()
    }
  },
  Post: {
    author: function author (post) {
      return post.getAuthor()
    }
  }
}

module.exports = resolvers
