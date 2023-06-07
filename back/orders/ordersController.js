import { getOrdersFromDb, getAllOrdersByUserIdFromDb, createOrderFromDb, updateOrderFromDb, deleteOrderFromDb } from "./orderServices.js"

export const getOrders = async (req, res) =>  {
    try {
        const orders = await getOrdersFromDb()
        res.send(orders)
    } catch(err) {
        res.send(err)
    }
}

export const getAllOrdersByUserId = async (req, res) => {
    const userId = req.params.id
    try{
        const orders = await getAllOrdersByUserIdFromDb(userId)
        res.send(orders)
    } catch(err) {
        res.send(err)
    }
 }

export const createOrder = async (req, res) => {
    const {title, desc, need, price, userID} = req.body
    try {
        const order = await createOrderFromDb(title, desc, need, price, userID)
        res.send('Order succesfully created!')
    } catch(err) {
        res.send(err)
    }
}

export const deleteOrder = async (req, res) => {
    const orderId = req.params.id
    try {
        const order = await deleteOrderFromDb(orderId)
        res.send('Order succesfully deleted!')
    } catch(err) {
        res.send(err)
    }
}

export const updateOrder = async (req, res) => {
    const orderId = req.params.id
    const {title, desc, need, price, userID} = req.body
    try { 
        const order = await updateOrderFromDb(orderId, title, desc, need, price, userID )
        res.send('Order succesfully updated!')
    } catch(err) {
        res.send(err)
    }

}