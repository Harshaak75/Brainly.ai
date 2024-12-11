"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthValidate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const userAuthValidate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: "Token is required" });
        }
        const valid_token = jsonwebtoken_1.default.verify(token, config_1.secret_key || "");
        console.log(valid_token);
        if (!valid_token) {
            res.status(400).json({ message: "Invalid token" });
        }
        req.userId = valid_token;
        return next();
    }
    catch (error) {
        res.send(error);
    }
});
exports.userAuthValidate = userAuthValidate;
