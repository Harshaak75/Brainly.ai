// db manipulation

import { users } from "../models/user.model";

interface usertype {
    username?: string;
    email: string;
    password: string;
}

export const CreateUser = async ({username, email, password}: usertype) =>{
    if(!username || !email || !password){
        throw new Error("All fields are required");
    }

    const user = await users.create({username, email, password});

    return user;
}

export const validateUser = async ({email, password}: usertype) =>{
    if(!email || !password){
        throw new Error("Email and password are required");
    }

    const valid_user = await users.findOne({email, password});

    return valid_user;
}