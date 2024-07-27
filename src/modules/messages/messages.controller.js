import messageModel from "../../../db/models/message.model.js"
import { AppError } from "../utils/classError.js"
import { asyncHandeler } from "../utils/globalErrorHandling.js"

export const addMessage = asyncHandeler(async (req ,res , next) =>{
    const message = await messageModel.create(req.body)
    return res.status(200).json({msg:"done"})
}
)

export const readMessage = asyncHandeler(async (req ,res , next) =>{
    const message = await messageModel.find({receiverId: req.user._id})
    return res.status(200).json(message)
})


export const deleteMessage = asyncHandeler(async (req ,res , next) =>{
    const message = await messageModel.deleteOne({_id: req.headers.id , receiverId: req.user._id})
    if(!message.deletedCount){
        return next(new AppError("Message not found or you are not allow to delete this massge" , 400))
    }
    return res.status(200).json({msg:"Message is deleted Succesfully"})
})