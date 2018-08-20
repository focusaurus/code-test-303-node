"use strict";
const pack = require("./package");

const config = {
  API_IP: process.env.API_IP || "127.0.0.1",
  API_PG_DB_NAME: process.env.API_PG_DB_NAME || "api",
  API_PG_HOST: process.env.API_PG_HOST || "postgres",
  API_PG_PASSWORD: process.env.API_PG_PASSWORD || "password",
  API_PG_PORT: process.env.API_PG_PORT || 5432,
  API_PG_USER: process.env.API_PG_USER || "postgres",
  API_PORT: process.env.API_PORT || 3000,
  API_VERSION: pack.version
};
config.API_PG_URL = `postgres://${config.API_PG_USER}:${
  config.API_PG_PASSWORD
}@${config.API_PG_HOST}:${config.API_PG_PORT}/${config.API_PG_DB_NAME}`;
module.exports = config;
