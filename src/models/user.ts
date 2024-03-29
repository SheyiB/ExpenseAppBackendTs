import { Schema, model } from 'mongoose';
import crypto from  'crypto';
import bcrypt from  'bcrypt';
import jwt from 'jsonwebtoken';
import { isNumberObject } from 'util/types';

export interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    dob: Date;
    phone: number;
    cash: number;
    password: string;
    role: string;
}


export interface UserLogin {
    email: string,
    password: string
}

export interface UserData extends IUser {
    getSignedJwtToken : () => string;
    matchPassword : () => string;    
}


const UserSchema = new Schema<UserData>({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    dob: {type: Date, required: true},
    phone: {type: Number, required: true},
    cash: {type: Number, required: true, default: 0},
    password: {type: String, required: true},
    role: {type: String, enum: ["user", "SuperUser", "admin"], default : "user"}  
},
{
    timestamps: true
});

// For Saftey -> Before saving Encrypt Password using bcrypt
UserSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

});

// For Session Mgt -> Create a method that creates a Signed JWT using the user id for session Mgt
UserSchema.methods.getSignedJwtToken = function() {
    return jwt.sign( {id: this._id}, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

// A Method that Checkes if Entered Password equals Hashed Password
UserSchema.methods.matchPassword = async function(enteredPassword: string ){
    return await bcrypt.compare(enteredPassword, this.password);
}


export const User = model<UserData>('User', UserSchema)
