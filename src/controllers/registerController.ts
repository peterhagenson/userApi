import { Request, Response } from 'express'
import User from '../models/user'
import bcrypt from 'bcryptjs'


const addUser = async (req: Request, res: Response) => {
    //const { firstName, lastName, email, password } = req.body
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const newUser = new User({    
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        //save newUser to db
       const user = await newUser.save()
       console.log("user: ", user)
       if (user) {
         return { msg: 'user added' }
        }
        //TODO error handling
    } catch (error) {
        throw new Error("error in addUser")
    }
}

export {addUser} 