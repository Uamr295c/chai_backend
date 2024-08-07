import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

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
