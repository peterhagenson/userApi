import express from 'express'
import { Request, Response } from 'express' 
// import addUser from '../controllers/registerController'
const router = express.Router();

router.post('/', (req: Request, res: Response) => {
    console.log('in registerRouter')
  res.send('in registerRouter')
})

export default router