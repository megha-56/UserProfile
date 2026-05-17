import User from "../models/user.models.js";
import bcrypt from "bcrypt";


// *Same for every controller*
// export default registerUser=async ()=>{
//     try{
//         *all conditions*
//         res.status(200 or 201).json({message:"Successfull"})      *200 for requestsucceded,info fetched,no new resource created)  201(if new user is created)*
//     }catch(error){
//         console.error("error registering User",error);
//         res.status(500).json({message:"server error"});
//     }
// }

export const registerUser = async (req,res)=>{
    try{
        const{name,username,email,phoneNo,password}=req.body;

        if(!name||!username||!email||!phoneNo||!password){
            return res.status(400).json({message:"All fields are required"});
        }
        
        const existingUser=await User.findOne({$or:[{email}, {username}, {phoneNo}]});
        if(existingUser){
            res.status(400).json({message:"User with this username,enail or phoneNo already exists"});
        }
        
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=new User({
            name,
            username,
            email,
            phoneNo,
            password:hashedPassword
        })
        await newUser.save();


        res.status(201).json({message:"user registered succeccfully!"});
    }catch(error){
        console.error("error registering user", error);
        res.status(500).json({message:"Server Error"});
    }
}


export const loginUsername=async (req,res)=>{
    try{

    const{username,password}=req.body;

    if(!username||!password){
       return  res.status(400).json({message:"username and password are required"});
    }

    const user=User.findOne({username});
    if(!user){
        return res.status(400),json({message:"User does not exists"})
    }
    
    const isPasswordCorrect=await bcrypt.compare(password,hashedPassword);
    if(!isPasswordCorrect){
        res.status(400).json({message:"Incorrect Password"})
    }


    res.status(200).json({message:"logged in successfully!"})
    }catch(error){
        console.error("error logging in ",error)
        res.status(500).json({message:"Internal server error"});
    }


}


export const getUserProfile=async (req,res)=>{
    try{
        const{username}=req.body;

        const user=User.findOne({username});
        if(!user){
            return res.status(400).json({message:"No user found"});
        }

        res.status(200).json({user})
    }catch(error){
        console.error("error fetching userprofile",error);
        res.status(500).json({message:"internal server error"});
    }
}

export const editProfile = async (req,res)=>{
    try{
        const {name,username,email, phoneNo,pfp, gender, dob,bio, skills}=req.body;

        if(!username){
            return res.status(400).json({message:"Username and password is required"})
        }
        
        const user=await User.findOne({username});
        if(!user){
            return res.status(400).json({message:"invalid username or password"});
        }
        
        if (username) user.username=username;
        if (name) user.name=name;
        if (email) user.email=email;
        if (pfp) user.pfp=pfp;
        if (gender) user.gender=gender;
        if (phoneNo) user.phoneNo=phoneNo;
        if (dob) user.dob=dob;
        if (bio) user.bio=bio;
        if (skills) user.skills=skills;


        res.status(200).json({message:"prodile updated successfully"})
    }catch(error){
        console.error("Can't edit user profile",error);
        res.status(500).json({message:"Internal server error"})
    }
}