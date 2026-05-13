const { Pool } = require("pg");

const pool = new Pool({
    user: "arceus",
    host: "localhost",
    database: "voidhire",
    password: "arceus@1404",
    post: 5432,
});

module.exports = pool;
