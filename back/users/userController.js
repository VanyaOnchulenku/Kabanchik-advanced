import {getUsersFromDb, createUserFromDb} from './userServices.js'
import { userSchema } from '../validator.js'


 export async function getUsers(req, res) {
    try {
        const users = await getUsersFromDb()
        res.send(users)
    } catch(err) {
        res.send(err)
    }
}

export const createUser = async (req, res) => {

    const {error, value} = userSchema(req.body)
    if(error) {
        res.send(error.details) 
    } else {
    const {name, age, city} = req.body
    try {
       const user = await createUserFromDb(name, age, city)
        res.send('User created!')
    } catch (err) {
         res.send(err)
    }
  }
 }


