import mysql from 'mysql2/promise.js'

 export const getUsersFromDb = async () => {
    const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
    const [rows] = await db.query('SELECT * FROM users')
    return rows
}

export const createUserFromDb = async (name, age, city) => {
    const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
    const [rows] =  await db.execute('INSERT INTO users (`name`, `age`, `city`) VALUES (?, ?, ?)', [name, age, city])
    db.end()
    return rows
 }

