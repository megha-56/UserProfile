// import express from "express";
// import cors from "cors";
// import dotenv from 'dotenv';
// import connectDb from './src/db/connectDb.js';
// import userRoutes from './src/routes/user.routes.js'



// const app=express();
// dotenv.config();
// app.use(cors());
// // app.options("*", cors());




// const port=5000;

// app.get('/',(req,res)=>{
//     res.send("Hello Buddy! , This is our first page")
// })

// app.use(express.json());
// app.use('/api/user',userRoutes);

// app.listen(port,()=>{
//     connectDb();
//     console.log(`server is running at port ${port}`)
// });






import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDb from "./src/db/connectDb.js";
import userRoutes from "./src/routes/user.routes.js";

const app = express();
const port = 5000;

// config dotenv
dotenv.config();

// middleware
app.use(cors({}));
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Hello Buddy!, This is our first page");
});

// routes
app.use("/api/user", userRoutes);

// server
app.listen(port, async () => {
  await connectDb();
  console.log("Server has started");
});