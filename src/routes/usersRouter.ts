import express from 'express'
import { Request, Response } from 'express'
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    console.log('in get all users')
  res.send('in  usersRouter')
})

router.get('/:id', (req: Request, res: Response) => {
    console.log('in get user by id')
  res.send('in  usersRouter')
})

export default router