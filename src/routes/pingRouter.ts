
import express from 'express'
import { Request, Response } from 'express'
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    console.log('test', req)
  res.send('ping')
})

export default router