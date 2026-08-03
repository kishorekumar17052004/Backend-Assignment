import authModel from "../model/authModel.js";
import bcrypt from "bcrypt"
export const registerData = async(req,res)=>{
    try {

        const {name,email,password} = req.body;

        if(!name ||!email || !password ){
            return res.status(409).json({msg:"please fill fields "})
        }

        const checkEmail = await authModel.findOne({email})

        if(checkEmail){
            return res.status(409).json({msg:"Email Already Exist "})
        }

        const changePassword = await bcrypt.hash(password,10)

        const registerData  = await authModel.create({name,email,password:changePassword})

         res.status(201).json({
            msg:"Succesfully Created",
            registerData
        })
    } catch (error) {
        res.status(500).json({msg:"something Went wrong ",error:error})
    }
}


export const loginData = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password ){
            return res.status(409).json({msg:"N0 fields "})
        }

        const checkEmail = await authModel.findOne({email})

        if(!checkEmail){
         return res.status(401).json({msg:"This email Was Not Vaild"})
        }

        const checkPassword = await bcrypt.compare(password,checkEmail.password)

        if(!checkPassword){
            return res.status(401).json({msg:"This password Was Not Vaild"})
        }

        res.status(200).json({msg:"Successfully Get user",name:checkEmail.name})

    } catch (error) {
         res.status(500).json({msg:"something Went wrong ",error:error})
    }
}