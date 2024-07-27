import mongoose, { model, Schema } from "mongoose";

const messageSchema = new Schema({
    content:{
        type: String,
        require : true
    },
    receiverId:{
        type: Schema.Types.ObjectId,
        require: true,
        ref: "user",
    },
})

const messageModel = model("message" , messageSchema)
export default messageModel