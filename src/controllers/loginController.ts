import {Request, Response} from 'express'
import User from '../models/user'  
import bcrypt from 'bcryptjs'

const loginUser = async (email: string, password: string, res: Response) => {
    console.log('in loginUser')
    try {
        const user = await User.find({ email: email })
        if (user.length) {
            let pass: string = user[0]?.password ?? ''
            const match = await bcrypt.compare(password, pass)
            if (!match) {
                return { msg: 'incorrect username or password' }
            }
            return { msg: 'user logged in', user: user[0] }
        } else {
            return { msg: 'incorrect username or password' }

        }
    } catch (error) {
        throw new Error("error in loginUser")
    }
}
       

export {loginUser}