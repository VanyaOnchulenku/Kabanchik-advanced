import mysql from 'mysql2/promise'

export const getBidsfromDb = async () => {
    
    const db = await mysql.createConnection({host: 'localhost', user : 'root', password: 'root', database : 'schema'})
    const [rows] = await db.execute('SELECT * FROM bids')
    db.end()
    return rows

}

export const getBidsByIdfromDb = async (userId) => {
        const db = await mysql.createConnection({host: 'localhost', user : 'root', password: 'root', database : 'schema'})
        const [rows] = await db.execute('SELECT * FROM bids WHERE userID = ?', [userId])
        db.end()
        return rows
    
}

export const getBidsByOrderIdfromDb = async (orderId) => {

        const db = await mysql.createConnection({host: 'localhost', user : 'root', password: 'root', database : 'schema'})
        const [rows] = await db.execute('SELECT * FROM bids WHERE orderID = ?', [orderId])
        db.end()
        return rows

}

export const createBidFromDb = async (message, price, userId, orderId) => {
        const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [rows] = await db.execute('INSERT INTO bids (message, price, userID, orderID) VALUES (?, ?, ?, ?) ',[message, price, userId, orderId])
        db.end()
        return rows

}
// UpdateBid something goes wrong, can't get what's exactly
export const updateBidFromDb = async (bidId, userId, message, price, userID, orderId ) => {
    
        const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [user] = await db.execute('SELECT userID FROM bids WHERE bidID = ?', [bidId])
        if(user[0].userID != userId) {
                throw new Error('You are not allowed to update this bid')
        }
        console.log(user)
        console.log(userId)
        const [rows] = await db.execute("UPDATE bids SET `message` = ?, `price` = ?, `userID` = ?, `orderID` = ? WHERE `bidID` = ?",[message, price, userID, orderId, bidId])
        db.end()
        return rows

}

export const deleteBidFromDb = async (bidId, userId) => {
    
        const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [user] = await db.execute('SELECT userID FROM bids WHERE bidID = ?',[bidId])
        if (user[0].userID !== userId) {
                throw new Error ('You are now allowed to delete this bid')
        }
        const [rows] = await db.execute('DELETE FROM bids WHERE bidID = ?', [bidId])
        db.end()
        return rows
 
}

export const acceptBidFromDb = async (bidId, userId ) => {
    
        const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [user] = await db.execute('SELECT userID FROM bids WHERE bidID = ?',[bidId])
        if (user[0].userID != userId) {
                throw new Error ('You are not allowed to accept this bid')
        }
        const [rows] = await db.execute("UPDATE bids SET status = 'accepted' WHERE bidID = ?",[bidId])
        db.end()
        return rows

}
export const rejectBidFromDb = async (bidId, userId ) => {

        const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
        const [user] = await db.execute('SELECT userID FROM bids WHERE bidID = ?',[bidId])
        if (user[0].userID != userId) {
                throw new Error ('You are not allowed to reject this bid')
        }
        const [rows] = await db.execute("UPDATE bids SET status = 'rejected' WHERE bidID = ?",[bidId])
        db.end()
        return rows
 
}

export const getAcceptedUsersBidsfromDb = async (userId, authorizatedUserId) => {
    const db = await mysql.createConnection({host: 'localhost', user : 'root', password: 'root', database : 'schema'})
    const [rows] = await db.execute('SELECT * FROM bids WHERE userID = ? AND status = "accepted" ', [userId] )
    if (rows[0].userID != authorizatedUserId) {
        throw new Error ('This information is private')
    }
    db.end()
    return rows
}

export const getRejectedUsersBidsfromDb = async (userId, authorizatedUserId) => {
    const db = await mysql.createConnection({host: 'localhost', user : 'root', password: 'root', database : 'schema'})
    const [rows] = await db.execute('SELECT * FROM bids WHERE userID = ? AND status = "rejected"', [userId])
     if (rows[0].userID != authorizatedUserId) {
        throw new Error ('This information is private')
    }
    db.end()
    return rows

}

export const getPendingUsersBidsfromDb = async (userId, authorizatedUserId) => {
    const db = await mysql.createConnection({host: 'localhost', user : 'root', password: 'root', database : 'schema'})
    const [rows] = await db.execute('SELECT * FROM bids WHERE userID = ? AND status = "pending"', [userId])
     if (rows[0].userID != authorizatedUserId) {
        throw new Error ('This information is private')
    }
    db.end()
    return rows
    
}