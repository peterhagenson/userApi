import {Request, Response} from 'express'
import User from '../models/user'  
import bcrypt from 'bcryptjs'

const loginUser = async (email: string, password: string, res: Response) => {
    console.log('in login', email, password)
    const hashedPassword = await bcrypt.hash(password, 10)
    try{
     const user = await User.find({email : email, password : password}) 
     if (user.length) {
         return {msg: 'user logged in', user: user[0]}
     } else {
        return {msg: 'user not found'}
    }}
    catch (error) {
        throw new Error("error in loginUser")
    }
}
       

export default loginUser