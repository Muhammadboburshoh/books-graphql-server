const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    books: [Book!]!
    authors: [Author!]!
  }

  type Book {
    id: Int!
    name: String!
    price: Int!
    author: Author!
  }

  type Author {
    id: Int!
    name: String!
    books: [Book!]!
  }

  type Mutation {

    createAuthor(
      name: String!
    ): Author!

    createBook(
      name: String!
      price: Int!
      author_id: Int!
    ): Book!

    deleteAuthor (id: Int!): Author

    deleteBook (id: Int!): Book
  }
`

module.exports = typeDefs