import {getUsersFromDb, createUserFromDb} from './userServices.js'


 export async function getUsers(req, res) {
    try {
        const users = await getUsersFromDb()
        res.send(users)
    } catch(err) {
        res.send(err)
    }
}

export const createUser = async (req, res) => {
    const {name, age, city} = req.body
    try {
       const user = await createUserFromDb(name, age, city)
        res.send(user)
    } catch (err) {
        return err
    }
 }

