import Joi from 'joi'
import {UserLogin, IUser} from '../models/user'

type UserSignUp = Omit<IUser, "cash">

function validateLogin( loginDetails : UserLogin){
    const loginSchema = Joi.object().keys({
        email :  Joi.string().required(),
        password: Joi.string().required()
    })

    return loginSchema.validate(loginDetails)
}

function validateSignup( signupDetails : UserSignUp){
    const signupSchema = Joi.object().keys({
        firstname: Joi.string().required,
        lastname: Joi.string().required,
        phone: Joi.number().required,
        email :  Joi.string().required(),
        password: Joi.string().required(),
        date: Joi.date().required()
    })

    return signupSchema.validate(signupDetails)
}

module.exports = {
    validateLogin,
    validateSignup
}