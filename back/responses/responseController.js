import { responseAboutClientSchema, responseAboutExecutorSchema } from "../validator.js"
import { createResponseAboutClientFromDb, createResponseAboutExecutorFromDb, getResponsesAboutClientsfromDb, getResponsesAboutExecutorsfromDb } from "./responseServices.js"


export const getResponsesAboutClients = async (req, res) => {

        const response = await getResponsesAboutClientsfromDb()
        res.send(response)

}

export const getResponsesAboutExecutors = async (req, res) => {

        const response = await getResponsesAboutExecutorsfromDb ()
        res.send(response)

}

export const createResponseAboutClient = async (req, res) => {
    const {error, value} = responseAboutClientSchema(req.body) 
    if(error) {
        res.send(error.details)
    } else {
    const {executorId, text, clientId, mark} = req.body
        const response = await createResponseAboutClientFromDb (executorId, text, clientId, mark)
        res.send('Thanks a lot for your response')

   }
}

export const createResponseAboutExecutor = async (req, res) => {
    const {error, value} = responseAboutExecutorSchema(req.body)
      if(error) {
        res.send(error.details)
    } else {
        const {clientId, text, executorId, mark} = req.body
            const response = await createResponseAboutExecutorFromDb (clientId, text, executorId, mark)
            res.send('Thanks a lot for your response')
  
    }
}