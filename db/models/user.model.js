import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    userName:{
        type: String,
        require : true,
    },
    email:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    OTP:{
        type: Number,
        require: true
    },
    confirmed:{
        type: Boolean,
        default: false,
    }
})

const userModel = model("user" , userSchema)
export default userModel