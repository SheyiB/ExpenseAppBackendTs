"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchaseRouter = void 0;
const express_1 = __importDefault(require("express"));
const purchase_controller_1 = require("../controllers/purchase.controller");
const auth_1 = require("../middlewares/auth");
exports.purchaseRouter = express_1.default.Router();
exports.purchaseRouter.route('/').get(auth_1.protect, purchase_controller_1.getAllPurchases).post(auth_1.protect, purchase_controller_1.createPurchase);
exports.purchaseRouter.route('/:id').get(auth_1.protect, purchase_controller_1.getPurchase).put(auth_1.protect, purchase_controller_1.updatePurchase).delete(auth_1.protect, purchase_controller_1.deletePurchase);
exports.purchaseRouter.route('/user/:id').get(auth_1.protect, purchase_controller_1.getUserPurchases);
