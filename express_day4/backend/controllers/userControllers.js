const users = []

export const register = async(req,res)=>{
    try {
   
        const user = req.body
        users.push(user)
        res.status(201).json({
            message: "User registered successfully",
             users,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Unable to register user" })
    }
}
export const getRegister = async(req,res)=>{
    try {
        res.status(200).json({
            message: "get User  successfully",
            users,
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "404 page is not found " })
    }
}
