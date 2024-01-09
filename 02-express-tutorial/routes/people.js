const express = require('express')
const router = express.Router()

let {people} = require('../data')

router.get('/', (req,res)=>{
  console.log('>>>> GET')
  res.status(200).json({success:true,data:people})
})



// router.post('/',(req,res)=>{
//   console.log('>>>>>y')
//   const {name} = req?.body

 
//   if(!name){
//     return res.status(400).json({success:false, message:'please Provide name'})
   
//   }else{
//     return res.status(201).json({success:true, person:name})
//   }

// })

router.post('/',(req,res)=>{
  console.log('SECOIOND POST')
  const {name} = req?.body

  if(!name){
   return res.status(400).json({success:false, message:" PLEASE PROVIDE A NAME "})
  }else{
    return res.status(201).json({success:true, data:[...people, {id:Math.random(),name}]})
  }

})

router.put('/:id',(req,res)=>{
  console.log('>>>>> PUT')
  const {name} = req?.body
  const {id}= req.params

  let updated = people.map(item =>{
    if(item.id === Number(id)){
       item.name = name
    }
    return item
  })

  res.status(201).json({succes:true, data:updated})
  


  console.log('>>> helllo')

  // if(!name){
  //  return res.status(400).json({success:false, message:" PLEASE PROVIDE A NAME "})
  // }else{
  //   return res.status(201).json({success:true, data:[...people, {id:Math.random(),name}]})
  // }

})

module.exports = router
