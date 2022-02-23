const express = require('express')
const bcrypt = require('bcrypt')
const app = express()
require('dotenv').config();

app.use(express.json())
const users = []

app.get('/', (req,res) =>{
    res.send()
})

app.get('/favicon.ico', (req,res) =>{
    res.send()
})

app.get('/get', (req,res) =>{
    res.send(users)
})

app.post('/users', async (req,res) => {
    try{
        const hashed = await bcrypt.hash(req.body.password, 10)
        const user = {password: hashed}
        console.log(user)
        users.push(user)
        
        res.status(201).send()
    }
    catch{
        res.status(500).send()
    }
})

app.post('/login', async (req,res) =>{
    try{
        const check = process.env.PASSWORD
        if(await bcrypt.compare(req.body.password, check)){
            res.status(200).send("success")
        }
        else{
            res.status(401).send("not allowed")
        }
    } catch {
        res.status(500).send()
    }
})

app.listen(3000)