import {AuthService} from '../services/auth.service';
import {Request, Response, NextFunction} from "express";

const auth = new AuthService();

export const signUp = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const user = await auth.signUp(req.body);
        return res.status(201).json(user)
    }  catch(e : any){
        
        return next(res.status(e.code? e.code : 500).json({success: false, message: e.message}))
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const {user, token } = await auth.login(req.body);
        
        res.header('x-auth-token', token);
        return res.status(201).json({user, token});
    }  
    catch(e: any) {
            return next(res.status(e.status).json({success: false, message: e.message}))    
    
        
    }
}
