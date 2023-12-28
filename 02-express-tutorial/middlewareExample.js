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

// instead of manually adding logger funciton (middleware) to each method/request
// we can have the logger function  invoked on all automatically but using it in app.use
// >>>>> app.use(logger) <<<<<<<

// ideally all the app.use function are call before all the route function so that app.use is used by all the ones below

// if we add a route in app.use('/api, logger) ... the middleware will be used only to routes starting with /api

app.get('/',(req,res)=>{
  res.send('Home')
})

app.get('/about',logger,(req,res)=>{
  res.send('About')
})

app.listen(5000,()=>{
  console.log('app is being listened on port 5000')
})

