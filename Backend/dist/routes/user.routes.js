"use strict";
// it is used to route to different routes
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const user_controller_1 = require("../controller/user.controller");
const user_middleware_1 = require("../middleware/user.middleware");
const router = express_1.default.Router();
router.post('/register', [
    (0, express_validator_1.body)('username').notEmpty().withMessage('Username is required'),
    (0, express_validator_1.body)('email').isEmail().withMessage('Please enter a valid email'),
    (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], user_controller_1.registerUser);
router.post("/signin", [
    (0, express_validator_1.body)('email').isEmail().withMessage('Please enter a valid email'),
    (0, express_validator_1.body)('password').isLength({ min: 6 }).notEmpty().withMessage('Password is required')
], user_controller_1.signinUser);
router.post("/content", [
    user_middleware_1.userAuthValidate,
    (0, express_validator_1.body)('title').notEmpty().withMessage('Title is required'),
    (0, express_validator_1.body)('link').notEmpty().withMessage('Link is required'),
    (0, express_validator_1.body)('type').notEmpty().withMessage('Type is required')
], user_controller_1.addContent);
exports.default = router;
