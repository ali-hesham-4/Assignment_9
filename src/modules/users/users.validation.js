import joi from 'joi';

export const signUpValidation ={
    body: joi.object({
        userName: joi.string().alphanum().min(3).required(),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).required(),
        OTP: joi.string().pattern(/^[0-9]{4,8}/).required(),
    })
}

export const signInValidation = {
    body: joi.object({
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).required(),
    })
}