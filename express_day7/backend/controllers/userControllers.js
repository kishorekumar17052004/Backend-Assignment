import userModel from "../model/userModel.js";

export const registerData = async(req,res)=>{
    try {
        const {name,email,age}=req.body;

        const studentData = await userModel.create({name,email,age})
        res.status(201).json({
            msg:"StudentDB Create Successfully",
            studentData
        })
        
    } catch (error) {
        res.status(500).json({
            msg:"StudentDB Create Faild",
            error
        })
    }
}

export const getData = async(req,res)=>{
    try {

        const studentData = await userModel.find()
        res.status(200).json({
            msg:"Get Students Successfully",
            studentData
        })
        
    } catch (error) {
        res.status(500).json({
            msg:"Get Student Faild",
            error
        })
    }
}

export const singleData = async(req,res)=>{
    try {
      
      const {id} = req.params    
        const studentData = await userModel.findById(id)
        res.status(200).json({
            msg:"Get Students Successfully",
            studentData
        })
        
    } catch (error) {
        res.status(500).json({
            msg:"Get Student Faild",
            error
        })
    }
}

export const deleteData = async(req,res)=>{
    try {
      
      const {id} = req.params    
        const studentData = await userModel.findByIdAndDelete(id)
        res.status(200).json({
            msg:"Delete Students Successfully",
            studentData
        })
        
    } catch (error) {
        res.status(500).json({
            msg:"Delete Student Faild",
            error
        })
    }
}


export const updateData = async(req,res)=>{
    try {
        const {id}=req.params;

        const studentData = await userModel.findByIdAndUpdate(id,{age:21},{new:true , runvalidators:true})
        res.status(200).json({
            msg:" updated StudentDB Successfully",
            studentData
        })
        
    } catch (error) {
        res.status(500).json({
            msg:"StudentDB updated  Faild",
            error
        })
    }
}

