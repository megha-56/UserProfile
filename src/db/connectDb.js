import mongoose from "mongoose";

const connectDb= async ()=>{
    try{
        await mongoose.connect(process.env.Mongo_DB_URL);
        console.log(" connected to successfully")
        console.log(" connected to MoongoDb successfully")
    }catch(error){
        console.error("Error Connecting to MongoDb",error);
        process.exit(1);
    }
}

export default connectDb;