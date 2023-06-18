import mysql from 'mysql2/promise.js'

export const getOrdersFromDb = async () => {
    
    const db =  await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
    const [rows] = await db.execute('SELECT * FROM orders')
    db.end()
    return rows
 
}

export const getAllOrdersByUserIdFromDb = async (userId) => {
     
        const db =  await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [rows] = await db.execute('SELECT * FROM orders WHERE userID = ? ', [userId])
        db.end()
        return rows

}

export const createOrderFromDb = async (title, desc, need, price, userID) => {
    
        const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [rows] = await db.execute('INSERT INTO orders (`title`, `desc`, `need`, `price`, `userID`) VALUES (?, ?, ?, ?, ?) ',[title, desc, need, price, userID])
        db.end()
        return rows
 
}

export const deleteOrderFromDb = async (orderId,userId) => {

        const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [user] =  await db.execute('SELECT userID FROM orders WHERE orderID = ? ', [orderId])
        if (user[0].userID !== userId){ 
         throw new Error("You are not allowed to delete this order")
        }
        const [rows] = await db.execute('DELETE FROM orders WHERE orderID = ?', [orderId])
        db.end()
        return rows
}

export const updateOrderFromDb = async (orderId, userId, title, desc, need, price, userID) => {
    
        const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [user] = await db.execute('SELECT userID FROM orders WHERE orderID = ?',[orderId])
        console.log([user])
        console.log(userId)
        if(user[0].userID != userId) {
                throw new Error('You are not allowed to update this order')
        } 
        const [rows] = await db.execute('UPDATE orders SET `title` = ?, `desc` = ?, `need` = ?, `price` = ?, `userID` = ? WHERE orderID = ?',[title, desc, need, price, userID, orderId])
        db.end()
        return rows
        
 
}




