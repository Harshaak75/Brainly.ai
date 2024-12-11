"use strict";
// logic part
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContent = exports.signinUser = exports.registerUser = void 0;
const user_service_1 = require("../services/user.service");
const express_validator_1 = require("express-validator");
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    const { username, email, password } = req.body;
    const user_data = yield (0, user_service_1.CreateUser)({ username, email, password });
    const token = user_data.generateAuthToken();
    res.status(200).json({ token: token });
    next();
});
exports.registerUser = registerUser;
const signinUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    const { email, password } = req.body;
    const validUser = yield (0, user_service_1.validateUser)({ email, password });
    if (!validUser) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = validUser.generateAuthToken();
    res.status(200).json({
        message: "signup successful",
        token: token
    });
    next();
});
exports.signinUser = signinUser;
const addContent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    console.log(req.userId);
    res.send(req.userId);
});
exports.addContent = addContent;
