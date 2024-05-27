import { dbConnect } from "./config/db.js"
import dotenv from "dotenv"
import Data from "./modals/dataModel.js"
import data from "./data.json" assert { type: 'json' }

export const start=async()=>{
try{
   await dbConnect(process.env.MONGO_URL);
   await Data.create(data)
   console.log("success")
}catch(error){
    console.log(error)
}
}
