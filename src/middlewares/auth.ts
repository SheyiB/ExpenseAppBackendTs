import jwt from 'jsonwebtoken';
import {User} from "../models/user";
import {Request, Response, NextFunction} from "express";

export const protect = async(req: Request, res: Response, next: NextFunction) => {

	const token = req.header('x-auth-token');

	if(!token) return next(res.status(401).json({message: 'UNAUTHORIZED!'}))

	try{
		const decoded =  jwt.verify(token, process.env.JWT_SECRET!);
		const { id } = (decoded as any)
		const currentUser = await User.findById(id);

		if(!currentUser) return next(res.status(404).json({message: 'USER NOT FOUND!'}));

		currentUser.password = '';

		(req as any).user = currentUser;


		return next();
		


	}catch(e: any){

		if (e.name === 'TokenExpiredError' ){
			return next(res.status(403).json({message: 'TOKEN EXPIRED! LOGIN!'}));
		}

		else {
			return next(res.status(406).json({message: 'INVALID TOKEN! '}))
		} 
	}	

}

export const isAccountOwner = async(req: Request, res: Response, next: NextFunction) => {

	
	const token = req.header('x-auth-token');

	if(!token) return next(res.status(401).json({message: 'UNAUTHORIZED!'}))

	try{

		const decoded =  jwt.verify(token, process.env.JWT_SECRET!);

		const { id } = (decoded as any)

		const currentuser = (req as any).user ;

		if(!currentuser){
			console.log("Crashhh")
		}
		else{
			if (id != req.params.id || currentuser.role != 'SuperUser'){
				return res.status(401).json({message: 'UNAUTHORIZED USER!'})
			}	
		}
		
		return next();
		

	}catch(e: any){

		if (e.name === 'TokenExpiredError' ){
			return next(res.status(403).json({message: 'TOKEN EXPIRED! LOGIN!'}));
		}

		else {
			return next(res.status(406).json({message: 'INVALID TOKEN! '}))
		} 
	}	

}