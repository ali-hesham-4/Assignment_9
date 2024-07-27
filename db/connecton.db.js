import mongoose from 'mongoose';
const connectionDB = ()=>{
    return mongoose.connect("mongodb://uvkxa88mlmt6vu2fptgl:nVDgTl9gDmnqsv4BksT@bfeovmifsqidq7fwwhl7-mongodb.services.clever-cloud.com:2168/bfeovmifsqidq7fwwhl7")
    .then(()=>{
        console.log("Connected to DataBase");
    })
    .catch((err)=>{
        console.log({msg:"Faild to connect to database" , err});
    })
}

export default connectionDB;