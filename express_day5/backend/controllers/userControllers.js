
const userInformation = []

export const userCreater = async(req,res)=>{
    try {
            
        const userData = req.body
        userInformation.push(userData)
    res.status(201).json({
        msg:"user Create Successfully ",
        user:userInformation
    })


    } catch (error) {
        res.status(500).json({
            msg:"user not Create"
        })
    }
}

export const userInfo = async(_,res)=>{
    try {
        res.status(200).json({
        msg:"user Create Successfully ",
        user:userInformation
    })
        
    } catch (error) {
        res.status(404).json({msg:"user not fount"})
    }
}

export const userParams = async(req,res)=>{
    
    try {
        userInformation.push(req.params)
        res.status(201).json({
            msg:"create Params successfully",
            user: userInformation  
        })
    } catch (error) {
       res.status(500).json({
        msg:"No Params Created"
       })   
    }
}