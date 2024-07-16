const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json')

// intialize server
const app = express();


// to read all users we r using get request

app.get('/users',(req,res)=>{
    // res.send('message')
    res.json(users)
})
// slug variable 
app.post('/users/:id',(req,res)=>{
    // res.send(`message ${req.params.id}`)
    const user = users.find((u)=>u.id == req.params.id)
    res.send(user)
})





app.listen(3000,()=>{
    console.log('Server is running on port http://localhost:3000')
})