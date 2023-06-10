import Joi from 'joi'

const validator = (schema) => (payload) =>
    schema.validate(payload, {abortEarly : false})


 const createUserSchema = Joi.object({
    name : Joi.string().min(3).required(),
    city : Joi.string().required(),
    age : Joi.number().integer().min(18).max(119).required()
})

export const userSchema = validator(createUserSchema)

const createOrderSchema = Joi.object({
    title : Joi.string().required(), 
    desc : Joi.string().min(1).required(),       
    need  : Joi.string(),
    price : Joi.number().integer().min(20).required(), 
    userID : Joi.number().required()
})

export const orderSchema = validator(createOrderSchema)

const createBidSchema = Joi.object({
    message : Joi.string().min(3).required(),
    price : Joi.number().integer().min(20).required(),
    userID : Joi.number().required(),
    orderID : Joi.number().required()
})

export const bidSchema = validator(createBidSchema)

const createResponseAboutClientSchema = Joi.object({
    executorId: Joi.number().min(1).required(),
    text: Joi.string().min(15).required(), 
    clientId: Joi.number().min(1).required(),
    mark: Joi.number().integer().min(1).required()
})

export const responseAboutClientSchema = validator(createResponseAboutClientSchema)

const createResponseAboutExecutorSchema = Joi.object({
    clientId: Joi.number().min(1).required(),
    text: Joi.string().min(15).required(), 
    executorId: Joi.number().min(1).required(),
    mark: Joi.number().integer().min(1).required()
})

export const responseAboutExecutorSchema = validator(createResponseAboutExecutorSchema)