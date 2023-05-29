import express from 'express'
import pingRouter from "./routes/pingRouter"
import loginRouter from "./routes/loginRouter"
import registerRouter from "./routes/registerRouter"
import usersRouter from "./routes/usersRouter"
import connectDB from './db/connect'
import dotenv from 'dotenv'
import cors from 'cors'
import session  from 'express-session'
import cookieParser from 'cookie-parser'
import passport from 'passport'



//Middleware
dotenv.config()
const app = express()
app.use(express.json())
const port = process.env.PORT
const url = process.env.MONGO_URL
app.use(cors({origin: "http://localhost:3001", credentials: true}))
app.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true,  
  })
)
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())

app.use('/ping', pingRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/user', usersRouter)



//server + mongoDB connection
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
