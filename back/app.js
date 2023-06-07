import express from 'express'
import { getUsers, createUser } from './users/userController.js'

const app = express()

app.use(express.json())





app.get('/users', getUsers)
app.post('/user', createUser)






app.listen(3000, () => {
    console.log('hundred ish try')
})