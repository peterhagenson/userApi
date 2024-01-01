import express from 'express'
import { Request, Response } from 'express'
import {loginUser} from '../controllers/loginController'
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    const { username, password } = req.body
    try {
    const response = await loginUser(username, password, res)
    res.status(200).send(response)
    }
    catch (error) {
    res.status(500).json({ msg: 'there was an error' })
    }
})

export default router