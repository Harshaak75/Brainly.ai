"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const _1 = require(".");
const config_1 = require("./config");
const server = http_1.default.createServer(_1.app);
server.listen(config_1.port, () => {
    console.log(`Server is running on port ${config_1.port}`); // logs the server listening port
});
