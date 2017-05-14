// Update with required config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    seeds: './seeds',
    useNullAsDefault: true
    //directory: './test/helpers/seeds'
},

  production: {
    client: 'postgresql',
    connection: {
          database: process.env.DATABASE_URL
        },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
