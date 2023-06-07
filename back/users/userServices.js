import mysql from 'mysql2/promise.js'

 export const getUsersFromDb = async () => {
    try {
       const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
       const [rows] = await db.query('SELECT * FROM users')
       return rows
   } catch (err) {
       return err
   }
}



export const createUserFromDb = async (name, age, city) => {
    try {
        const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const result =  await db.execute('INSERT INTO users (`name`, `age`, `city`) VALUES (?, ?, ?)', [name, age, city])
        db.end()
        return result
    } catch (err) {
        return err
    }
 }

