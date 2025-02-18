//this file is create to divide the code into modules like this file connect api controllers etc
// Express app setup karega
import express from 'express'
import cors from 'cors'
import { frontend_url } from './configs/config.js'
import authRoutes from './routes/auth.route.js'
const app = express()
app.use(cors(
    {
        origin: [frontend_url,"http://localhost:3000/"],
        methods: ["GET","POST","PUT","DELETE"],
        credentials:true
    }
))
app.use(express.json())

app.get('/', (req,res) => {
    res.send("Connected")
})
app.use('/api/auth',authRoutes)

export default app