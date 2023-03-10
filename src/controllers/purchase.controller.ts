import {PurchaseService} from '../services/purchase.service';
import {Request, Response, NextFunction} from "express";

const Purchase = new PurchaseService();

export const createPurchase = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const purchase = await Purchase.createPurchase(req.body);
        return next(res.status(201).json(purchase)); 
        
    }  catch(e:any){
        return next(res.status(e.code? e.code : 500).json({success: false, message: e.message}))
    }
}

export const getAllPurchases = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const purchase = await Purchase.getAllPurchase(req.query);

        return next(res.status(200).json(purchase))
    }  catch(e:any){
        return next(res.status(500).json(e))
    }
}


export const getUserPurchases = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const purchase = await Purchase.getUserPurchase(req.params.id);
        
        return next(res.status(200).json(purchase))
    }  catch(e:any){
        return next(res.status(500).json(e))
    }
}

export const getPurchase = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const purchase = await Purchase.getPurchase(req.params.id);
        
        return next(res.status(200).json(purchase))
    }  catch(e:any){
        return next(res.status(500).json(e))
    }
}

export const updatePurchase = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const purchase = await Purchase.updatePurchase(req.params.id, req.body);
        
        return next(res.status(200).json(purchase))
    }  catch(e:any){
        return next(res.status(e.code? e.code : 500).json({success: false, message: e.message}))
    }
}

export const deletePurchase = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const purchase = await Purchase.deletePurchase(req.params.id);
        
        return next(res.status(204).json({data: purchase}))
    }  catch(e:any){
        return next(res.status(500).json(e))
    }
}