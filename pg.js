const { Pool } = require('pg')

const pool = new Pool({
  // connectionString: 'postgres://oodgllyj:aiwp6PfVzDRRHNeSs3kSE9qn9Wyrk3UW@queenie.db.elephantsql.com:5432/oodgllyj'
  connectionString: 'postgers://muhammadbobur:1111@localhost:5432/gql_books'
})

const rows = async (SQL, ...params) => {

  const clint = await pool.connect()

  try {
    const { rows } = await clint.query(SQL, params)

    return rows
  }
  finally {
    clint.release()
  }
}

module.exports.rows = rows