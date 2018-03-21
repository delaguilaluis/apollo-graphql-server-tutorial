var fakeAuthor = {
  id: 1,
  firstName: 'Hello',
  lastName: 'World'
}

var fakePosts = [
  {
    id: 1,
    title: 'A post',
    text: 'Some text',
    views: 2
  },
  {
    id: 2,
    title: 'Another post',
    text: 'Some other text',
    views: 200
  }
]

var resolvers = {
  Query: {
    author: function (root, args) {
      return fakeAuthor
    },
    allAuthors: function (root, args) {
      return [fakeAuthor]
    }
  },

  Author: {
    posts: function (root, args) {
      return fakePosts
    }
  },

  Post: {
    author: function (root, args) {
      return fakeAuthor
    }
  }
}

module.exports = resolvers
