import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { secret_key } from "../config";

export const userAuthValidate =async (req: Request,res: Response,next: NextFunction): Promise<any> =>{
    try {
        const token = req.headers.authorization;

        if(!token){
            return res.status(401).json({message: "Token is required"});
        }

        const valid_token = jwt.verify(token,secret_key || "")

        console.log(valid_token)

        if(!valid_token){

            res.status(400).json({message: "Invalid token"})
        }

        req.userId = valid_token as string;
        return next();

    } catch (error) {
        res.send(error)
    }
}