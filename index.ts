import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { router } from './routes'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

dotenv.config()

const app:Express = express()
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/api', router)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})