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
exports.PurchaseService = void 0;
const purchase_1 = require("../models/purchase");
class PurchaseService {
    createPurchase(body) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const purchase = yield purchase_1.Purchase.create(body);
                return resolve(purchase);
            }
            catch (e) {
                e.source = 'Create Purchase Service';
                return reject(e);
            }
        }));
    }
    getUserPurchase(userid) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const purchases = yield purchase_1.Purchase.find({ user: userid });
                return resolve(purchases);
            }
            catch (e) {
                e.source = 'Get User Purchase Service';
                return reject(e);
            }
        }));
    }
    getAllPurchase(query) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const purchases = yield purchase_1.Purchase.find(query);
                return resolve(purchases);
            }
            catch (e) {
                e.source = 'Get Purchase Service';
                return reject(e);
            }
        }));
    }
    getPurchase(purchaseid) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const purchase = yield purchase_1.Purchase.findById(purchaseid);
                if (purchase)
                    return resolve(purchase);
                reject('Purchase Not Found!');
            }
            catch (e) {
                e.source = 'Get Purchase Service';
                return reject(e);
            }
        }));
    }
    updatePurchase(purchaseid, body) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let purchase = yield purchase_1.Purchase.findById(purchaseid);
                if (!purchase)
                    return reject('Purchase not found!');
                purchase = yield purchase_1.Purchase.findByIdAndUpdate(purchaseid, body, { new: true, runValidators: true });
                return resolve(purchase);
            }
            catch (e) {
                e.source = 'Update Purchase Service';
                return reject(e);
            }
        }));
    }
    deletePurchase(purchaseid) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let purchase = yield purchase_1.Purchase.findById(purchaseid);
                if (!purchase_1.Purchase)
                    return reject('Purchase not found!');
                purchase = yield purchase_1.Purchase.findByIdAndDelete(purchaseid);
                return resolve(purchase);
            }
            catch (e) {
                e.source = 'Update Purchase Service';
                return reject(e);
            }
        }));
    }
}
exports.PurchaseService = PurchaseService;
