import mysql from 'mysql2/promise'

export const getBidsfromDb = async () => {
    try {
    const db = await mysql.createConnection({host: 'localhost', user : 'root', password: 'root', database : 'schema'})
    const [rows] = await db.execute('SELECT * FROM bids')
    db.end()
    return rows
    } catch(err) {
        return err
    }
}

export const getBidsByIdfromDb = async (userId) => {
    try {
        const db = await mysql.createConnection({host: 'localhost', user : 'root', password: 'root', database : 'schema'})
        const [rows] = await db.execute('SELECT * FROM bids WHERE userID = ?', [userId])
        db.end()
        return rows
        } catch(err) {
            return err
        }
}

export const getBidsByOrderIdfromDb = async (orderId) => {
    try {
        const db = await mysql.createConnection({host: 'localhost', user : 'root', password: 'root', database : 'schema'})
        const [rows] = await db.execute('SELECT * FROM bids WHERE orderID = ?', [orderId])
        db.end()
        return rows
        } catch(err) {
            return err
        }
}

export const createBidFromDb = async (message, price, userId, orderId) => {
    try{
        const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [rows] = await db.execute('INSERT INTO bids (message, price, userID, orderID) VALUES (?, ?, ?, ?) ',[message, price, userId, orderId])
        db.end()
        return rows
        } catch(err) {
        return err
        }
}

export const updateBidFromDb = async (bidId, message, price, userId, orderId ) => {
    try {
        const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [rows] = await db.execute("UPDATE bids SET message = ?, price = ?, userID = ?, orderID = ? WHERE bidID = ?",[message, price, userId, orderId, bidId])
        db.end()
        return rows
    } catch(err) {
        return err
    }
}

export const deleteBidFromDb = async (bidId) => {
    try {
        const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [rows] = await db.execute('DELETE FROM bids WHERE bidID = ?', [bidId])
        db.end()
        return rows
    } catch(err) {
        return err
    }
}

export const acceptBidFromDb = async (bidId ) => {
    try {
        const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [rows] = await db.execute("UPDATE bids SET status = 'accepted' WHERE bidID = ?",[bidId])
        db.end()
        return rows
    } catch(err) {
        return err
    }
}
export const rejectBidFromDb = async (bidId ) => {
    try {
        const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [rows] = await db.execute("UPDATE bids SET status = 'rejected' WHERE bidID = ?",[bidId])
        db.end()
        return rows
    } catch(err) {
        return err
    }
}

export const getAcceptedUsersBidsfromDb = async (userId) => {
    try {
    const db = await mysql.createConnection({host: 'localhost', user : 'root', password: 'root', database : 'schema'})
    const [rows] = await db.execute('SELECT * FROM bids WHERE userID = ? AND status = "accepted" ', [userId] )
    db.end()
    return rows
    } catch(err) {
        return err
    }
}

export const getRejectedUsersBidsfromDb = async (userId) => {
    try {
    const db = await mysql.createConnection({host: 'localhost', user : 'root', password: 'root', database : 'schema'})
    const [rows] = await db.execute('SELECT * FROM bids WHERE userID = ? AND status = "rejected"', [userId])
    db.end()
    return rows
    } catch(err) {
        return err
    }
}

export const getPendingUsersBidsfromDb = async (userId) => {
    try {
    const db = await mysql.createConnection({host: 'localhost', user : 'root', password: 'root', database : 'schema'})
    const [rows] = await db.execute('SELECT * FROM bids WHERE userID = ? AND status = "pending"', [userId])
    db.end()
    return rows
    } catch(err) {
        return err
    }
}