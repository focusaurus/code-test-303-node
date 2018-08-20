"use strict";
const pack = require("./package");

const config = {
  API_VERSION: pack.version,
  API_IP: process.env.API_IP || "127.0.0.1",
  API_PORT: process.env.API_PORT || 3000,
  API_PG_HOST: process.env.API_PG_HOST || "postgres",
  API_PG_PORT: process.env.API_PG_PORT || 5432,
  API_PG_DB_NAME: process.env.API_PG_DB_NAME || "api"
};

module.exports = config;
