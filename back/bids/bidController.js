import { bidSchema } from "../validator.js";
import { getBidsfromDb, getBidsByIdfromDb, createBidFromDb, updateBidFromDb, deleteBidFromDb, acceptBidFromDb, rejectBidFromDb, getAcceptedUsersBidsfromDb, getRejectedUsersBidsfromDb, getPendingUsersBidsfromDb, getBidsByOrderIdfromDb } from "./bidServices.js";

export const getBids = async (req, res) => {

        const bids = await getBidsfromDb()
        res.send(bids)
 
}

export const getBidsById = async (req, res) => {
    const userId = req.params.id

        const bids = await getBidsByIdfromDb(userId)
        res.send(bids)
 
}

export const getBidsByOrderId = async (req, res) => {
    const orderId = req.params.id

        const bids = await getBidsByOrderIdfromDb(orderId)
        res.send(bids)
 
}

export const createBid = async (req, res) => {
    const {error, value} = bidSchema(req.body)
    if(error) {
        res.send(error.details)
    } else {
    const {message, price, userID, orderID} = req.body

        const bid = await createBidFromDb(message, price, userID, orderID)
        res.send('Bid succesfully created!')
 
  }
}

export const updateBid = async (req, res) => {
    try {    
    const {error, value} = bidSchema(req.body)
    if(error) {
        res.send(error.details)
    } else {
    const bidId = req.params.id
    const userId = req.query.userId
    const {message, price, userID, orderId} = req.body
 
        const bid = await updateBidFromDb(bidId, userId, message, price, userID, orderId)
        res.send(bid)
    }
    } catch(err) {
        res.send(err.message)
    }
}

export const deleteBid = async (req, res) => {
    try {
    const bidId = req.params.id
    const userId = req.body.userId

        const bid = await deleteBidFromDb(bidId, userId)
        res.send('Your bid succesfully deleted!')
    } catch(err) {
        res.send(err.message)
    }

}

export const acceptBid = async (req, res) => {
    try {
    const bidId = req.params.id
    const userId = req.query.userId
 
        const bid = await acceptBidFromDb(bidId, userId)
        res.send('Your bid succesfully accepted!')
    } catch(err) {
        res.send(err.message)
    }
}

export const rejectBid = async (req, res) => {
    try {
    const bidId = req.params.id
    const userId = req.query.userId
 
        const bid = await rejectBidFromDb(bidId, userId)
        res.send('Your bid succesfully rejected!')
    } catch(err) {
        res.send(err.message)
    }
}

export const getAcceptedBids = async (req, res) => {
    try {
    const userId = req.params.id
    const authorizatedUserId = req.query.userId

        const bids = await getAcceptedUsersBidsfromDb(userId, authorizatedUserId)
        res.send(bids)
    } catch(err) {
        res.send(err.message)
    }
 
}

export const getRejectedBids = async (req, res) => {
    try {
    const userId = req.params.id
    const authorizatedUserId = req.query.userId
        const bids = await getRejectedUsersBidsfromDb(userId, authorizatedUserId)
        res.send(bids)
    } catch(err) {
        res.send(err.message)
    }
}

export const getPendingBids = async (req, res) => {
    try {
    const userId = req.params.id
    const authorizatedUserId = req.query.userId
        const bids = await getPendingUsersBidsfromDb(userId, authorizatedUserId)
        res.send(bids)
    } catch(err) {
        res.send(err.message)
    }
}