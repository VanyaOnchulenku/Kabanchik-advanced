import { bidSchema } from "../validator.js";
import { getBidsfromDb, getBidsByIdfromDb, createBidFromDb, updateBidFromDb, deleteBidFromDb, acceptBidFromDb, rejectBidFromDb, getAcceptedUsersBidsfromDb, getRejectedUsersBidsfromDb, getPendingUsersBidsfromDb, getBidsByOrderIdfromDb } from "./bidServices.js";

export const getBids = async (req, res) => {
    try {
        const bids = await getBidsfromDb()
        res.send(bids)
    } catch(err) {
        res.send(err)
    }
}

export const getBidsById = async (req, res) => {
    const userId = req.params.id
    try {
        const bids = await getBidsByIdfromDb(userId)
        res.send(bids)
    } catch(err) {
        res.send(err)
    }
}

export const getBidsByOrderId = async (req, res) => {
    const orderId = req.params.id
    try {
        const bids = await getBidsByOrderIdfromDb(orderId)
        res.send(bids)
    } catch(err) {
        res.send(err)
    }
}

export const createBid = async (req, res) => {
    const {error, value} = bidSchema(req.body)
    if(error) {
        res.send(error.details)
    } else {
    const {message, price, userID, orderID} = req.body
    try {
        const bid = await createBidFromDb(message, price, userID, orderID)
        res.send('Bid succesfully created!')
    } catch(err) {
        res.send(err)
    }
  }
}

export const updateBid = async (req, res) => {
    const {error, value} = bidSchema(req.body)
    if(error) {
        res.send(error.details)
    } else {
    const bidId = req.params.id
    const {message, price, userId, orderId} = req.body
    try { 
        const bid = await updateBidFromDb(bidId, message, price, userId, orderId)
        res.send(bid)
    } catch(err) {
        res.send(err)
    }
   }
}

export const deleteBid = async (req, res) => {
    const bidId = req.params.id
    try {
        const bid = await deleteBidFromDb(bidId)
        res.send('Your bid succesfully deleted!')

    } catch (err) {
        res.send(err)
    }
}

export const acceptBid = async (req, res) => {
    const bidId = req.params.id
    try { 
        const bid = await acceptBidFromDb(bidId)
        res.send('Your bid succesfully accepted!')
    } catch(err) {
        res.send(err)
    }
}

export const rejectBid = async (req, res) => {
    const bidId = req.params.id
    try { 
        const bid = await rejectBidFromDb(bidId)
        res.send('Your bid succesfully rejected!')
    } catch(err) {
        res.send(err)
    }
}

export const getAcceptedBids = async (req, res) => {
    const userId = req.params.id
    try {
        const bids = await getAcceptedUsersBidsfromDb(userId)
        res.send(bids)
    } catch(err) {
        res.send(err)
    }
}

export const getRejectedBids = async (req, res) => {
    const userId = req.params.id
    try {
        const bids = await getRejectedUsersBidsfromDb(userId)
        res.send(bids)
    } catch(err) {
        res.send(err)
    }
}

export const getPendingBids = async (req, res) => {
    const userId = req.params.id
    try {
        const bids = await getPendingUsersBidsfromDb(userId)
        res.send(bids)
    } catch(err) {
        res.send(err)
    }
}