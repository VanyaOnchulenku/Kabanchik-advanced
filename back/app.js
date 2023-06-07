import express from 'express'
import { getUsers, createUser} from './users/userController.js'
import { createOrder, deleteOrder, getAllOrdersByUserId, getOrders, updateOrder } from './orders/ordersController.js'
import { getBids, getBidsById, createBid, updateBid, deleteBid, acceptBid, rejectBid, getAcceptedBids, getRejectedBids, getPendingBids } from './bids/bidController.js'

const app = express()

app.use(express.json())





app.get('/users', getUsers)
app.post('/user', createUser)

app.get('/orders', getOrders)
app.get('/orders/:id', getAllOrdersByUserId)
app.post('/order', createOrder)
app.put('/order/:id', updateOrder)
app.delete('/order/:id', deleteOrder)


app.get('/bids', getBids)
app.get('/bids/:id', getBidsById)
app.post('/bid', createBid)
app.put('/bid/:id', updateBid)
app.delete('/bid/:id', deleteBid)
app.put('/accept/bid/:id', acceptBid)
app.put('/reject/bid/:id', rejectBid)
app.get('/accepted/bids/:id', getAcceptedBids)
app.get('/rejected/bids/:id', getRejectedBids)
app.get('/pending/bids/:id', getPendingBids)









app.listen(3000, () => {
    console.log('hundred ish try')
})