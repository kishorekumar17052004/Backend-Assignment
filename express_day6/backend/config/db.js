import mongoose from "mongoose"


const connectDB = async()=>{
    try {
        const DbConnection = await mongoose.connect(process.env.MONGODB_URI)
      
         console.log(`Database conneted successfully ${DbConnection.connection.host}`)
         console.log(`Database: ${DbConnection.connection.name}`)

    } catch (error) {
         console.log(`Database not Conntect${error.message}`)
         process.exit(1)
    }
}

export default connectDB