import express from 'express';
import connectionDB from './db/connecton.db.js';
import usersRouter from './src/modules/users/users.routes.js';
import massageRouter from './src/modules/messages/messages.routes.js';
import { AppError } from './src/modules/utils/classError.js';
import { globalErrorHandling } from './src/modules/utils/globalErrorHandling.js';


const app = express();
const port  = process.env.port || 3000;
connectionDB();



app.use(express.json())
app.use("/users" , usersRouter)
app.use("/messages" , massageRouter)

app.use("*" , (req , res , next)=>{
    return next(new AppError(`invalid url ${req.originalUrl}` , 404 ))
})

app.use(globalErrorHandling)

app.listen(port , (req , res , next)=>{
    console.log("Your App is running now on port " , port);
})

