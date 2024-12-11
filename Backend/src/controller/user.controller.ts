// logic part

import { NextFunction, Request, Response } from "express";
import { CreateUser, validateUser } from "../services/user.service";
import { validationResult } from "express-validator";

export const registerUser = async (req: Request,res: Response,next: NextFunction): Promise<any> =>{
    const error = validationResult(req);

    if(!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const {username, email, password} = req.body;

    const user_data = await CreateUser({username, email, password});

    const token = user_data.generateAuthToken();

    res.status(200).json({ token: token });
    next();
}

export const signinUser = async (req: Request, res: Response, next: NextFunction): Promise<any> =>{
    const error = validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({ errors: error.array() });
    }

    const {email, password} = req.body;

    const validUser = await validateUser({email, password});

    if(!validUser){
        return res.status(401).json({message: 'Invalid email or password'})
    }

    const token = validUser.generateAuthToken();

    res.status(200).json({
        message: "signup successful",
        token: token
    });

    next();
}