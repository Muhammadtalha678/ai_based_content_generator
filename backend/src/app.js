//this file is create to divide the code into modules like this file connect api controllers etc
// Express app setup karega
import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req,res) => {
    res.send("Connected")
})

export default app