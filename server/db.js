const Pool = require('pg').Pool;

const pool = new Pool ({
    user : 'postgres',
    password: 'database',
    host: 'localhost',
    localhost: 4321,
    database: 'todoangular'
});

module.exports = pool;