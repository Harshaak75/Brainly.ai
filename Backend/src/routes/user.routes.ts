// it is used to route to different routes

import express from "express"
import { body } from "express-validator";
import { registerUser, signinUser } from "../controller/user.controller";

const router = express.Router();

router.post('/register', [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    registerUser
);

router.post("/signin",[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min: 6}).notEmpty().withMessage('Password is required')
],
signinUser
)


export default router;