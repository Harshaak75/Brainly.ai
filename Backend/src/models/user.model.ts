import mongoose, { Schema, Document  } from "mongoose";
import {secret_key } from "../config";
import jwt from "jsonwebtoken"

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    generateAuthToken: () => string;
  }

const user = new Schema<IUser>({
    username: {type: "string", required: true},
    email: {type: "string", required: true, unique: true},
    password: {type: "string", required: true, select: false},
});

user.methods.generateAuthToken = function(): string{
    const token = jwt.sign({_id: this._id}, secret_key || " ");
    return token;
}

export const users =  mongoose.model<IUser>("users", user);

// const content = new Schema({
//     title: {type: "string", required: true},
//     link: {type: "string", required: true},
//     type: {type: "string", required: true},
//     tags: [{type: mongoose.Types.ObjectId}],
//     user_id: {type: Schema.Types.ObjectId, ref: "users"},
//     created_at: {type: Date, default: Date.now()}    
// })

// export const contents = mongoose.model("contents", content);
