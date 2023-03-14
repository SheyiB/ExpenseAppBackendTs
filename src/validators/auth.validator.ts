const Joi = require('joi')

export interface LoginDetails {
    email: string;
    password: string;
}

function validateLogin( loginDetails : LoginDetails){
    const loginSchema = Joi.object().keys({
        email :  Joi.string().required(),
        password: Joi.string().required()
    })

    return loginSchema.validate(loginDetails)
}

module.exports = {
    validateLogin
}