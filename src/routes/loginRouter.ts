import express from 'express'
import { Request, Response } from 'express'
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    console.log('in loginRouter test')
  res.send('in loginRouter')
})

export default router