export const asyncHandeler = (fn) =>{
    return (req , res , next) =>{
        fn(req , res, next).catch((err)=>{
            // res.status(500).json({msg:"catch error" , err})
            next(err)
        })
    }
}


export const globalErrorHandling = (err , req , res , next)=>{ 
    res.status(err.statusCode || 400).json({msg: "error" , err: err.message})
}