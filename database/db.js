const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "hyder007",
    database: "my_db",
    host: "localhost",
    port: "5432" 
});

module.exports = pool;