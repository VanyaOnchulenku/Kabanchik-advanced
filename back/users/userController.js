import {getUsersFromDb, createUserFromDb} from './userServices.js'
import { userSchema } from '../validator.js'


 export async function getUsers(req, res) {
    
        const users = await getUsersFromDb()
        res.send(users)
}

export const createUser = async (req, res) => {

    const {error, value} = userSchema(req.body)
    if(error) {
        res.send(error.details) 
    } else {
    const {name, age, city} = req.body
    
       const user = await createUserFromDb(name, age, city)
        res.send('User created!')
  }
 }


