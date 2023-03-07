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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePurchase = exports.updatePurchase = exports.getPurchase = exports.getUserPurchases = exports.getAllPurchases = exports.createPurchase = void 0;
const purchase_service_1 = require("../services/purchase.service");
const Purchase = new purchase_service_1.PurchaseService();
const createPurchase = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const purchase = yield Purchase.createPurchase(req.body);
        return res.status(201).json(purchase);
    }
    catch (e) {
        console.log(e.message);
        return res.status(500).json(e.message);
    }
});
exports.createPurchase = createPurchase;
const getAllPurchases = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const purchase = yield Purchase.getAllPurchase(req.query);
        return res.status(200).json(purchase);
    }
    catch (e) {
        return res.status(500).json(e);
    }
});
exports.getAllPurchases = getAllPurchases;
const getUserPurchases = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const purchase = yield Purchase.getUserPurchase(req.params.id);
        return res.status(200).json(purchase);
    }
    catch (e) {
        return res.status(500).json(e);
    }
});
exports.getUserPurchases = getUserPurchases;
const getPurchase = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const purchase = yield Purchase.getPurchase(req.params.id);
        return res.status(200).json(purchase);
    }
    catch (e) {
        return res.status(500).json(e);
    }
});
exports.getPurchase = getPurchase;
const updatePurchase = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const purchase = yield Purchase.updatePurchase(req.params.id, req.body);
        return res.status(200).json(purchase);
    }
    catch (e) {
        return res.status(500).json(e);
    }
});
exports.updatePurchase = updatePurchase;
const deletePurchase = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const purchase = yield Purchase.deletePurchase(req.params.id);
        return res.status(204).json({ data: purchase });
    }
    catch (e) {
        return res.status(500).json(e);
    }
});
exports.deletePurchase = deletePurchase;
