import express from 'express'
import { getUsers, createUser} from './users/userController.js'
import { createOrder, deleteOrder, getAllOrdersByUserId, getOrders, updateOrder } from './orders/ordersController.js'

const app = express()

app.use(express.json())





app.get('/users', getUsers)
app.post('/user', createUser)

app.get('/orders', getOrders)
app.get('/orders/:id', getAllOrdersByUserId)
app.post('/order', createOrder)
app.put('/order/:id', updateOrder)
app.delete('/order/:id', deleteOrder)






app.listen(3000, () => {
    console.log('hundred ish try')
})