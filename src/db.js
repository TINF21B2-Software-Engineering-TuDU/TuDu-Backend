const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "192.169.0.96",
    port: 5432,
    database: ""
});

module.exports = pool;