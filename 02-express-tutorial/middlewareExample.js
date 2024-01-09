const express = require('express')
const app = express()

const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res


// instead of manually adding logger funciton (middleware) to each method/request
// we can have the logger function  invoked on all automatically but using it in app.use
// >>>>> app.use(logger) <<<<<<<

// ideally all the app.use function are call before all the route function so that app.use is used by all the ones below

// if we add a route in app.use('/api, logger) ... the middleware will be used only to routes starting with /api


// to use multiple functions in app.use we need to have them in an array like so app.use([logger,authorize])
// keep  in mind that the functions will be called in the manner/order they are mentioned in app.use

app.use([logger,authorize])

app.get('/',(req,res)=>{
  res.send('Home')
})

// app.get('/about',logger,(req,res)=>{
//   res.send('About')
// })
app.get('/about', (req,res)=>{
  res.send('About')
})

app.listen(5000,()=>{
  console.log('app is being listened on port 5000')
})

