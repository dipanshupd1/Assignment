const express = require('express');
const cors = require('cors');
const mongoose=require("mongoose")
const User=require('../modal/usermodal.js')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/it-studio').then(()=>{
    console.log('connected successfully')})



app.get('/',(req,res)=>{
    res.send('checking')
})
app.post('/newdata',async(req,res)=>{
    const {Name}=req.body
    const {email}=req.body
    const {phone}=req.body
    const {hobby}=req.body
    if(phone.length!=10){
        res.send('phone validation failed')
    }
    try {
        const newuser=new User({
            Name,email,phone,hobby
        })
        saveuser=await newuser.save()
        res.send({
            newuser,
            msg:'success'
        })
    } catch (error) {
        res.send({
            msg:'failed'
        })
    }
})

app.post("/getdata",async(req,res)=>{
    
    try {
        const alluser=await User.find()
        res.send({
            alluser,
            msg:'success'
        })
    } catch (error) {
        res.send({
            msg:'unsuccessful'
        })
    }
})
app.post('/update',async(req,res)=>{
console.log(req.body);
const {Name}=req.body
const {email}=req.body
const {phone}=req.body
const {hobby}=req.body
const {id}=req.body
const updated={
    Name,email,phone,hobby
}
try {
    const update=await User.findOneAndUpdate({_id:id},updated,{new:true})
    res.send({
        update,
        msg:'success'
    })
} catch (error) {
    res.send({
        error,
        msg:'fail'
    })
}

})

app.post('/deleteuser',async(req,res)=>{
    console.log(req.body);
const {id}=req.body
try {
    const update=await User.findOneAndDelete({_id:id},{new:true})
    res.send({
        update,
        msg:'success'
    })
} catch (error) {
    res.send({
        error,
        msg:'fail'
    })
}

})


app.listen(8000,()=>{
    console.log('listening at port 3000');
})
