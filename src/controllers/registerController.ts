import { Request, Response } from 'express'
import User from '../models/user'
import bcrypt from 'bcryptjs'

const addUser = async (req: Request, res: Response) => {
    console.log('in register controller', req)

    //const { firstName, lastName, email, password } = req.body


    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const newUser = new User({    
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        //save newUser to db
       const user = await newUser.save()
       if (user) {
         return
        }
        //TODO error handling
    } catch (error) {
        throw new Error("error in addUser")
    }
}

export {addUser} 