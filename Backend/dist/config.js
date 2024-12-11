"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.secret_key = exports.port = exports.db_connection_string = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const env = dotenv_1.default.config();
exports.db_connection_string = process.env.DATABASE_URL;
exports.port = process.env.PORT;
exports.secret_key = process.env.SECRET_KEY;
