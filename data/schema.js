var graphQLTools = require('graphql-tools')
var makeExecutableSchema = graphQLTools.makeExecutableSchema
var addMockFunctionsToSchema = graphQLTools.addMockFunctionsToSchema
var mocks = require('./mocks')

var typeDefs = `
  type Query {
    testString: String
  }
`

var schema = makeExecutableSchema({ typeDefs: typeDefs })

addMockFunctionsToSchema({
  schema: schema,
  mocks: mocks
})

module.exports = schema
