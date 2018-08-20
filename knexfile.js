const config = require("config3");

module.exports = {
  development: {
    client: "pg",
    connection: config.API_PG_URL
  }
};
