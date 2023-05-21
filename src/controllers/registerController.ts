import { Request, Response } from 'express'
import User from '../models/user'

const addUser = async (req: Request, res: Response) => {
    console.log('in register controller', req)
   
    try {
        const user = await User.create(req)
        if (user) {
            return
        }
    } catch (error) {
        throw new Error("error in addUser")
    }
}

export {addUser}