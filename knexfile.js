// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

 const path = require("path")
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      user: "postgres",
      password: "91584072",
      host: "localhost",
      port: 5432,
      database: "Node_API"
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
