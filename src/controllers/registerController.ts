// import express from "express"
// const router = express.Router()
// import { Request, Response } from 'express'
// import User from '../models/user.js'

// export async function addUser(req: Request, res: Response) {
//     console.log(req.body)
//     try {
//         const user = new User(req.body)
//         await user.save()
//         res.status(201).json(user)
//     } catch (error) {
//         res.status(500).json({ msg: 'there was an error' })
//     }
// }