import mongoose from "mongoose"


const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database connected Successfully ${conn.connection.host}`)
    } catch (error) {
        console.log(`Database Connection Issue`)
    }

}
export default connectDB;