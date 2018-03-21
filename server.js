var express = require('express')
var apolloServerExpress = require('apollo-server-express')
var graphqlExpress = apolloServerExpress.graphqlExpress
var graphiqlExpress = apolloServerExpress.graphiqlExpress
var schema = require('./data/schema')

var GRAPHQL_PORT = 3000

var app = express()

app.use(express.json())
app.use('/graphql', graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
)
