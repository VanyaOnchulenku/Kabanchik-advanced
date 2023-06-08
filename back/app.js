import express from 'express'
import { getUsers, createUser} from './users/userController.js'
import { createOrder, deleteOrder, getAllOrdersByUserId, getOrders, updateOrder } from './orders/ordersController.js'
import { getBids, getBidsById, createBid, updateBid, deleteBid, acceptBid, rejectBid, getAcceptedBids, getRejectedBids, getPendingBids, getBidsByOrderId } from './bids/bidController.js'
import { createResponseAboutClient, createResponseAboutExecutor, getResponsesAboutClients, getResponsesAboutExecutors } from './responses/responseController.js'

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
app.get('/bids/order/:id', getBidsByOrderId)
app.post('/bid', createBid)
app.put('/bid/:id', updateBid)
app.delete('/bid/:id', deleteBid)
app.put('/accept/bid/:id', acceptBid)
app.put('/reject/bid/:id', rejectBid)
app.get('/accepted/bids/:id', getAcceptedBids)
app.get('/rejected/bids/:id', getRejectedBids)
app.get('/pending/bids/:id', getPendingBids)


app.get('/response/about/clients', getResponsesAboutClients)
app.get('/response/about/executors', getResponsesAboutExecutors)
app.post('/response/about/client', createResponseAboutClient)
app.post('/response/about/executor', createResponseAboutExecutor)








app.listen(3000, () => {
    console.log('hundred ish try')
})