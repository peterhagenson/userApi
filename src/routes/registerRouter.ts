import express from 'express'
import { Request, Response } from 'express' 
import {addUser} from '../controllers/registerController'
const router = express.Router();

router.post('/', (req: Request, res: Response) => {
  console.log('in registerRouter', req.body)
  try {
    addUser(req.body, res)
    res.status(200).send({message: 'user added'})
  } catch (error) {
    res.status(500).json({ msg: 'there was an error' })
  }
})

export default router