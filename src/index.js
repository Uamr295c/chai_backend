import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
const app = express();
dotenv.config({
  path: "./env",
});

connectDB().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on ${process.env.PORT}`);
  });
}).catch((err) => {
  console.log(`Connection error: ${err}`);
  
})

// const app=express();
// ;(async()=>{
//     try {
//      await mongoose.connect(`${process.env.MONGOO_URL}/${DB_Name}`)
//         app.on("error",(error)=>{
//             console.log(error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error: " + error);
//         throw error;

//     }
// })()
