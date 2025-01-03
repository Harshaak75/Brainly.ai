"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config");
function connectdb() {
    mongoose_1.default.connect(config_1.db_connection_string ? config_1.db_connection_string : "").then(() => {
        console.log("Database connection established successfully");
    }).catch(() => {
        console.error("Database connection failed");
    });
}
exports.default = connectdb;
