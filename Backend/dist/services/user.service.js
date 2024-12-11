"use strict";
// db manipulation
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
exports.validateUser = exports.CreateUser = void 0;
const user_model_1 = require("../models/user.model");
const CreateUser = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username, email, password }) {
    if (!username || !email || !password) {
        throw new Error("All fields are required");
    }
    const user = yield user_model_1.users.create({ username, email, password });
    return user;
});
exports.CreateUser = CreateUser;
const validateUser = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, password }) {
    if (!email || !password) {
        throw new Error("Email and password are required");
    }
    const valid_user = yield user_model_1.users.findOne({ email, password });
    return valid_user;
});
exports.validateUser = validateUser;
