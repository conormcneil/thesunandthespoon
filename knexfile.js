// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'http://localhost:5432/sunandspoon'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
