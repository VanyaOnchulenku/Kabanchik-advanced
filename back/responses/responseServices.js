import mysql from 'mysql2/promise.js'


export const getResponsesAboutClientsfromDb = async () => {
    const db = await mysql.createConnection({host: 'localhost', user : 'root', password: 'root', database : 'schema'})
    const [rows] = await db.execute('SELECT * FROM respaboutclients')
    db.end()
    return rows
}

export const getResponsesAboutExecutorsfromDb = async () => {
    const db = await mysql.createConnection({host: 'localhost', user : 'root', password: 'root', database : 'schema'})
    const [rows] = await db.execute('SELECT * FROM respaboutexecutors')
    db.end()
    return rows
}

export const createResponseAboutClientFromDb = async (executorId, text, clientId, mark ) => {
    const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
    const [rows] = await db.execute('INSERT INTO respaboutclients (executorId, text, clientId, mark ) VALUES (?, ?, ?, ?) ',[executorId, text, clientId, mark ])
    db.end()
    return rows 
}

export const createResponseAboutExecutorFromDb = async (clientId, text, executorId, mark ) => {
    const db = await mysql.createConnection({host : 'localhost', user : 'root', password : 'root', database : 'schema'})
    const [rows] = await db.execute('INSERT INTO respaboutexecutors (clientId, text, executorId, mark ) VALUES (?, ?, ?, ?) ',[clientId, text, executorId, mark ])
    db.end()
    return rows 
}

