import jwt from "jsonwebtoken"
import userModel from "../../db/models/user.model.js"
import { AppError } from "../modules/utils/classError.js"
export const auth = async (req , res , next)=>{
    const {token} = req.headers
    if(!token){
        return next(new AppError("Token is Not Exsist" , 400))
    }
    const decoded = jwt.verify(token , "Os@ma")
    const user = await userModel.findOne({emaail: decoded.emaail})
    if(!user){
        return next(new AppError("Invalid User" , 400))
    }
    req.user = user
    console.log(user._id);
    next()
}