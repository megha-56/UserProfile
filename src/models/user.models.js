import mongoose from "mongoose";

const userSchema= new moongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    phoneNo:{
        type:String,
        required:true,
        unique:true
    },
    pfp:{
        type: String,
        default: "https://i.pinimg.com/736x/24/23/77/24237738e0fbb07f0e1d92740aefb664.jpg"
    },
    gender:{
        type: String
    },
    dob:{
        type: Date
    },
    bio:{
        type: String
    },
    skills:{
        type: [String]
    },

},{timestamps:true})

const User=mongoose.model("User",userSchema);

export default User;