const express = require('express')
const app = express()

// req => middleware => res

const logger = (req,res,next)=>{
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log('>>> ',method,url,time)
  // if not provide next function in the middle ware the request will be pending/incomplet
  // to avoid it we can either send response from this function itself. Or call the next function which will 
  // let us run the code block and where this logger function is passed as a middleware.
  next()
  
}

app.get('/',(req,res)=>{
  res.send('Home')
})

app.get('/about',logger,(req,res)=>{
  res.send('About')
})

app.listen(5000,()=>{
  console.log('app is being listened on port 5000')
})

// watched video tilll 6:28