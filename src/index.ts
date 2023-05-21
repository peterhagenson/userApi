import express from 'express'
import pingRouter from "./routes/pingRouter"
import loginRouter from "./routes/loginRouter"
import registerRouter from "./routes/registerRouter"
import usersRouter from "./routes/usersRouter"
import connectDB from './db/connect'
import dotenv from 'dotenv'


dotenv.config()
const app = express()
app.use(express.json())

const port = process.env.PORT
const url = process.env.MONGO_URL


import mongoose from 'mongoose'

app.use('/ping', pingRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/user', usersRouter)

const start = async () => {
try {  
await connectDB(`${url}`)
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
} catch (error) {
console.log(error)
}
}

start()
