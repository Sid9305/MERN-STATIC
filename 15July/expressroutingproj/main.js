// console.log('Hello')

const express = require('express');
const app = express();

// HTTP request
// put , post , delete , patch , get

// server.request()
app.get('/',(req,res)=>{
  res.send('This is index page')  
})
app.get('/home',(req,res)=>{
    res.send('This is home page')
})

app.listen(3000,()=>{
    console.log('Server is running on port http://localhost:3000')  // listening to port 3000
})