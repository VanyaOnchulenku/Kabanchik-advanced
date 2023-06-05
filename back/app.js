const express = require('express')

const app = express()

const mysql = require('mysql2')

app.use(express.json())




app.listen(3000, () => {
    console.log('hundred ish try')
})