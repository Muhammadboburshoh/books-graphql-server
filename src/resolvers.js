const { rows } = require('../pg')

const createAuthorSql = `
  insert into authors(author_name) values ($1) returning *
`

const createBookSql = `
  insert into books(book_name, book_price, author_id) values ($1, $2, $3) returning *
`

const deleteAuthorSql = `
  delete from authors where author_id = $1
  returning *
`

const deleteBookSql = `
  delete from books where book_id = $1
  returning *
`

const resolvers = {

  Book: {
    id: (book) => book.book_id,
    price: (book) => book.book_price,
    name: (book) => book.book_name,

    author: async(book) => {

      const authors = await rows(`select * from authors`)

      return authors.find(author => author.author_id === book.author_id)
    }
  },

  Author: {
    id: (author) => author.author_id,
    name: (author) => author.author_name,

    books: async(author) => {

      const books = await rows(`select * from books`)

      return books.filter(book=> book.author_id === author.author_id)
    }
  },

  Query: {
    books: async () => await rows(`select * from books`),
    authors: async () => await rows(`select * from authors`),
  },

  Mutation: {
    createAuthor: async (_, {name}) => {

      const [newAuthor] = await rows(createAuthorSql, name)
      return newAuthor
    },

    createBook: async (_, {name, price, author_id}) => {

      const [newBook] = await rows(createBookSql, name, price, author_id)
      return newBook
    },

    deleteAuthor: async(_, { id }) => {
      const [deleteAuthor] = await rows(deleteAuthorSql, id)
  
      return deleteAuthor
    },

    deleteBook: async(_, { id }) => {
      const [deleteBook] = await rows(deleteBookSql, id)
  
      return deleteBook
    },
  },
}

module.exports = resolvers




