"use strict";

const { Pool } = require("pg");
const credentials = new Pool({
user: "postgres",
password: "password",
host: "localhost",
port: 5432,
database: "ultimatequizDB",
ssl: false
});
module.exports = credentials;