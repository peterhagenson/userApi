import express from 'express'
import { Request, Response } from 'express'
import loginUser from '../controllers/loginController'
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    const { email, password } = req.body
    try {
    await loginUser(email, password, res)
    //add condition for if user is found
    //res.status(200).send({message: 'user logged in'}) 
  } catch (error) {
    res.status(500).json({ msg: 'there was an error' })
    }
})

export default router