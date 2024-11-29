import mongoose from "mongoose";

console.log()

export const connectDB = async () => {
    try {

        const { connection } = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`


        console.log(`MongoDB conectado en ${url}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}