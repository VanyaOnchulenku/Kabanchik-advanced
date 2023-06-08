import { createResponseAboutClientFromDb, createResponseAboutExecutorFromDb, getResponsesAboutClientsfromDb, getResponsesAboutExecutorsfromDb } from "./responseServices.js"


export const getResponsesAboutClients = async (req, res) => {
    try {
        const response = await getResponsesAboutClientsfromDb()
        res.send(response)
    } catch (err) {
        res.send(err)
    }
}

export const getResponsesAboutExecutors = async (req, res) => {
    try {
        const response = await getResponsesAboutExecutorsfromDb ()
        res.send(response)
    } catch (err) {
        res.send(err)
    }
}

export const createResponseAboutClient = async (req, res) => {
    const {executorId, text, clientId, mark} = req.body
    try {
        const response = await createResponseAboutClientFromDb (executorId, text, clientId, mark)
        res.send('Thanks a lot for your response')
    } catch (err) {
        res.send(err)
    }
}

export const createResponseAboutExecutor = async (req, res) => {
    const {clientId, text, executorId, mark} = req.body
    try {
        const response = await createResponseAboutExecutorFromDb (clientId, text, executorId, mark)
        res.send('Thanks a lot for your response')
    } catch (err) {
        res.send(err)
    }
}