import mongoose from "mongoose"

const authSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        requried:true,
        unique:true,
        trim:true,
        lowecase:true
    },
    password:{
        type:String,
        requried:true,
        trim:true
    }
},{timestamps:true})

const authModel = mongoose.model("authuser",authSchema)

export default authModel;