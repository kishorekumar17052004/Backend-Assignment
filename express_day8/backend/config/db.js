import mongoose from "mongoose"

const connectDB = async()=>{
    try {
          const conn = await mongoose.connect(process.env.MONGODB_URI)
          console.log(`Database Connected Successfully DB: ${conn.connection.name}`)
    } catch (error) {
        console.log("error" , error.message) 
    }
}

export default connectDB