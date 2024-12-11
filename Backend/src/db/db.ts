import mongoose, { Schema } from "mongoose";
import { db_connection_string } from "../config";

function connectdb(){
    mongoose.connect(db_connection_string ? db_connection_string : "").then(() =>{
        console.log("Database connection established successfully")
    }).catch(() =>{
        console.error("Database connection failed")
    })
}

export default connectdb;

