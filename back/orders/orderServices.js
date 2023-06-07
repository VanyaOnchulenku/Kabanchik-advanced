import mysql from 'mysql2/promise.js'

export const getOrdersFromDb = async () => {
    try {
    const db =  await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
    const [rows] = await db.execute('SELECT * FROM orders')
    db.end()
    return rows
    } catch(err) {
        return err
    }
}

export const getAllOrdersByUserIdFromDb = async (userId) => {
    try { 
        const db =  await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [rows] = await db.execute('SELECT * FROM orders WHERE userID = ? ', [userId])
        db.end()
        return rows
    } catch(err) {
        throw err
    }
}

export const createOrderFromDb = async (title, desc, need, price, userID) => {
    try{
        const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [rows] = await db.execute('INSERT INTO orders (`title`, `desc`, `need`, `price`, `userID`) VALUES (?, ?, ?, ?, ?) ',[title, desc, need, price, userID])
        db.end()
        return rows
    } catch(err) {
        return err
    }
}

export const deleteOrderFromDb = async (orderId) => {
    try {
        const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [rows] = await db.execute('DELETE FROM orders WHERE orderID = ?', [orderId])
        db.end()
        return rows
    } catch(err) {
        return err
    }
}
export const updateOrderFromDb = async (orderId, title, desc, need, price, userID) => {
    try {
        const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [rows] = await db.execute('UPDATE orders SET `title` = ?, `desc` = ?, `need` = ?, `price` = ?, `userID` = ? WHERE orderID = ?',[title, desc, need, price, userID, orderId])
        db.end()
        return rows
    } catch(err) {
        return err
    }
}




