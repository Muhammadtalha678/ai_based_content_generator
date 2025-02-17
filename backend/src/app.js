//this file is create to divide the code into modules like this file connect api controllers etc
import express from 'express'

const app = express()

app.get('/', (req,res) => {
    res.send("Connected")
})

export default app