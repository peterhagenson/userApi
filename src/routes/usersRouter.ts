import express from 'express'
import { Request, Response } from 'express' 
import jwt from 'jsonwebtoken';
const router = express.Router();

router.get('/', authenticateToken, (req: Request, res: Response) => {
  console.log('in get all users');
  res.send([{username: 'user1'}, {username: 'user2'}]);
});

router.get('/:id', (req: Request, res: Response) => {
  res.send('in usersRouter');
});

function authenticateToken(req: Request, res: Response, next: any) {
    const authoHeader= req.headers['authorization'];
    const token = authoHeader && authoHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET ?? '', (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next()
    })
}

export default router