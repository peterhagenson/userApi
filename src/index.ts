import express from 'express'
import pingRouter from "./routes/pingRouter"
import loginRouter from "./routes/loginRouter"
import registerRouter from "./routes/registerRouter"
import usersRouter from "./routes/usersRouter"
const app = express()
const port = 3000

app.use('/ping', pingRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/user', usersRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})