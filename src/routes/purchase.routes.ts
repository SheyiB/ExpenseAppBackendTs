import express from "express";
import { createPurchase, deletePurchase,getAllPurchases,getPurchase, updatePurchase, getUserPurchases} from '../controllers/purchase.controller';
import {protect} from "../middlewares/auth";


export const purchaseRouter = express.Router();

purchaseRouter.route('/').get(protect,getAllPurchases).post(protect,createPurchase);
purchaseRouter.route('/:id').get(protect,getPurchase).put(protect,updatePurchase).delete(protect,deletePurchase);
purchaseRouter.route('/user/:id').get(protect,getUserPurchases);

