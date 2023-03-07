"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
const mongoose_1 = require("mongoose");
const purchaseSchema = new mongoose_1.Schema({
    item: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true, default: () => Date.now },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true }
}, {
    timestamps: true
});
exports.Purchase = (0, mongoose_1.model)('Purchase', purchaseSchema);
