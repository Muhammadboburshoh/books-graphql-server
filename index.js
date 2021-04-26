const { ApolloServer, gql} = require("apollo-server")

const resolvers = require('./src/resolvers')
const typeDefs = require('./src/typeDefs')

const server = new ApolloServer({
  resolvers,
  typeDefs
})

server.listen(5050)