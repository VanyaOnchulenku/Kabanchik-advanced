 const mysql = require('mysql2/promise')
 

 const conn = async () => {
    const db = await mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'schema'
    })
}

module.exports = conn