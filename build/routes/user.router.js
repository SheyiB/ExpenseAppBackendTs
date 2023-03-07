"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const purchase_router_1 = require("./purchase.router");
const auth_1 = require("../middlewares/auth");
exports.userRouter = express_1.default.Router();
exports.userRouter.use('/purchase', purchase_router_1.purchaseRouter);
exports.userRouter.route('/').get(auth_1.protect, user_controller_1.getAllUsers).post(user_controller_1.createUser);
exports.userRouter.route('/:id').get(auth_1.protect, user_controller_1.getUser).put(user_controller_1.updateUser).delete(user_controller_1.deleteUser);
