import express from 'express'
import { Request, Response } from 'express' 
import {addUser} from '../controllers/registerController'

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const response = await addUser(req, res)
    res.status(200).send(response)
  } catch (error) {
    res.status(500).json({ msg: 'there was an error' })
  }
})

export default router