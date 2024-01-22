const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:Number,
        required:true,
        minlength:10,
        unique:true
        // maxlength:10
    },
    hobby:{
        type:String,
        required:true
    },
})

const User=new mongoose.model("User",userSchema);

module.exports=User;