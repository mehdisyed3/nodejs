// const express = require('express')
// const app = express()
// const {products, people} = require('./data')

// app.get('/',(req,res)=>{
//   res.send('<h1>thiis is the home page</h1><a href="api/product">Product</a>')
//   // res.json(products)
// })
// app.get('/api/product',(req,res)=>{
//   const newProduct = products.map(item =>{
//     const {id,name,image} = item
//     return {
//       id,
//       name,
//       image
//     }
//   })
//   res.json(newProduct)

// })

// app.get('/api/product/:id',(req,res)=>{
//   const {id} = req.params
//    const singleProduct = products.find(item => item.id === Number(id))

//    if(!singleProduct){
//    return res.status(404).send('<p>Product does not exist</p>')
//    }
//    else{

//      return res.json(singleProduct)
//    }

// })

// app.get('/api/v1/query',(req,res)=>{
//   const {search, limit} = req.query
//   let requestedProduct = [...products]

//   if(search){
//     requestedProduct = requestedProduct.filter(item=>{
//       return item.name.startsWith(search)
//     })
//   }
//   if(limit){
//     requestedProduct = requestedProduct.slice(0,Number(limit))
//   }

//   if(requestedProduct.length < 1){
//     res.status(200).send('sorry there was nothing matching your request')
//   }
//   else{

//     res.status(200).json(requestedProduct)
//   }

// })

// app.get('/people',(req,res)=>{
//   res.json(people)
// })
// app.listen(5000,()=>{
//   console.log('app is being listened on port 5000')
// })

// // watchd vdeo till 5:50 .. its now getting interesting.. 