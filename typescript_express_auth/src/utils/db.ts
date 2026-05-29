import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string)
        console.log("Connection to Database established!")
    } catch (error:any) {
        console.log("Error connection database",error.message)
        process.exit(1)
    }
}

export default connectDB;