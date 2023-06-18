import { getOrdersFromDb, getAllOrdersByUserIdFromDb, createOrderFromDb, updateOrderFromDb, deleteOrderFromDb } from "./orderServices.js"
import { orderSchema } from "../validator.js"

export const getOrders = async (req, res) =>  {
    const orders = await getOrdersFromDb()
    res.send(orders)
}

export const getAllOrdersByUserId = async (req, res) => {
    const userId = req.params.id
    const orders = await getAllOrdersByUserIdFromDb(userId)
    res.send(orders)
 }

export const createOrder = async (req, res) => {
    const {error, value} = orderSchema(req.body)
    if(error) {
        res.json(error.details)
    } else {
        const {title, desc, need, price, userID} = req.body
        const order = await createOrderFromDb(title, desc, need, price, userID)
        res.send('Order succesfully created!')
  }
}

export const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id
        const userId = req.body.userId
        const order = await deleteOrderFromDb(orderId, userId)
        res.send('Order succesfully deleted!')
    } catch(err){
        res.send(err.message)
    }
}

export const updateOrder = async (req, res) => {
    const {error, value} = orderSchema(req.body)
    if(error) {
        res.json(error.details)
    } else {
    try {
        const orderId = req.params.id
        const userId = req.query.userId
        const {title, desc, need, price, userID} = req.body
        const order = await updateOrderFromDb(orderId, userId, title, desc, need, price, userID)
        res.send('Order succesfully updated!')
    } catch(err){
        res.send(err.message)
    }
   }
}