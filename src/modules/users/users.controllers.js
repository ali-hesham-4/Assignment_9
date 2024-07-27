import userModel from "../../../db/models/user.model.js"
import { sendEmail } from "../../service/sendEmail.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { asyncHandeler } from "../utils/globalErrorHandling.js";
import { AppError } from "../utils/classError.js";


export const signUp = asyncHandeler(async (req , res, next)=>{
    const {email , userName , password, OTP , confirmed} = req.body
    const emailExist = await userModel.findOne({email})
    if(emailExist){
        return next(new AppError("This Email is Already Exsist .... try another one" , 400))
    }
    const token =  jwt.sign({email },"@li")
    const link =  `http://localhost:3000/users/confirmEmail/${token}`
    const checkSendEmail = await sendEmail(email ,"conformation Email" ,`<a href='${link}'> Confirm Your Email</a>`)
    if(!checkSendEmail){
        return next(new AppError("Email Not Send ... please call Tech Team" , 400))
    }
        const hash = bcrypt.hashSync(password , 7)
        const user = await userModel.create({userName , email , password: hash , OTP , confirmed })
        return res.status(200).json({msg:"User Added Successfully"})
})



export const conformEmail = asyncHandeler(async(req ,res , next)=>{
    const {token} = req.params
    const decoded = jwt.verify(token , "@li")
    if(!decoded?.email){
        return next(new AppError("invalid payload" , 400))
    }
    const user = await userModel.findOneAndUpdate({email: decoded.email , confirmed: false} , {confirmed:true} , {new: true})
    if(!user){
        return next(new AppError("user not found or already confirmed" , 400))
    }
    res.status(200).json({msg:"done"})
})



export const logIn = asyncHandeler(async (req , res , next)=>{
    const {email , password} = req.body;
    const user = await userModel.findOne({email , confirmed: true})
    if(!user){
        return next(new AppError("Email not exsist or Not confirmed" , 400))
    }
    const match = bcrypt.compareSync(password , user.password)
    if(!match){
        return next(new AppError("Email or Password are in correct" , 400))
    }
    const token = jwt.sign({username: user.userName , email: user.email }, "Os@ma")
    return res.status(200).json({msg:"done" , token})
})