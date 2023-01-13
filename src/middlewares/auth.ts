import jwt from 'jsonwebtoken';
import {User} from "../models/user";
import {Request, Response} from "express";

export const protect = async(req: Request, res: Response, next) => {

	const token = req.header('x-auth-token');

	if(!token) return res.status(401).json({message: 'UNAUTHORIZED!'})

	try{

		const decoded =  jwt.verify(token, process.env.JWT_SECRET);

		const currentUser = await User.findById(decoded.id);

		currentUser.password = undefined;

		if(!currentUser) return res.status(406).json({message: 'USER NOT FOUND!'});

		req.user = currentUser;


		next();


	}catch(e){

		if (e.name === 'TokenExpiredError' ){
			return res.status(403).json({message: 'TOKEN EXPIRED! LOGIN!'});
		}

		else {
			return res.status(406).json({message: 'INVALID TOKEN! '})
		} 
	}	

}