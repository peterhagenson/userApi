import {Request, Response} from 'express'
import User from '../models/user'  
import bcrypt from 'bcryptjs' 
import jwt from 'jsonwebtoken';

interface FoundUser {
username: string,
password: string,
email: string,
}

const loginUser = async (username: string, password: string, res: Response) => {
    console.log('in loginUser')
    try {
        const user = await User.find({ username: username }) as FoundUser[]
        if (user.length) {
            let pass: string = user[0]?.password ?? ''
            const match = await bcrypt.compare(password, pass)
            if (!match) {
                return { message: 'incorrect username or password' }
            }
            const accessToken = jwt.sign({ username: user[0]?.username }, process.env.ACCESS_TOKEN_SECRET ?? 'secret')
            return { status: 200, msg: 'user logged in',username: user[0]?.username, accessToken: accessToken }
        } else {
            return { msg: 'incorrect username or password' }
        }
    } catch (error) {
        throw new Error("error in loginUser")
    }
}


       

export {loginUser}