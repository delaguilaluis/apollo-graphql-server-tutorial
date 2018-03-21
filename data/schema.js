var graphQLTools = require('graphql-tools')
var makeExecutableSchema = graphQLTools.makeExecutableSchema
// var addMockFunctionsToSchema = graphQLTools.addMockFunctionsToSchema
// var mocks = require('./mocks')
var resolvers = require('./resolvers')

var typeDefs = `
  type Query {
    author(firstName: String, lastName: String): Author
    allAuthors: [Author]
    getFortuneCookie: String # we'll use this later
  }

  type Author {
    id: Int
    firstName: String
    lastName: String
    posts: [Post]
  }

  type Post {
    id: Int
    title: String
    text: String
    views: Int
    author: Author
  }
`

var schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})

// addMockFunctionsToSchema({
//   schema: schema,
//   mocks: mocks
// })

module.exports = schema
