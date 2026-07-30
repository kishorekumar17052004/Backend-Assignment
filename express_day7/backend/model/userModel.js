import mongoose from "mongoose"



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowarecase:true,
        trim:true
    },
    age:{
        type:Number,
        required:true
    }

},{
    timestamps:true
})

const userModel = mongoose.model("user",userSchema)

export default userModel;