import mongoose from "mongoose"


const authSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true

    }
},{timestamps:true})


const authModel = mongoose.model("authuser",authSchema)

export default authModel;