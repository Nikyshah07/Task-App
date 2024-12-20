const mongoose =require('mongoose')
const conn=async()=>{
    try{
    const response=await mongoose.connect("mongodb://127.0.0.1:27017/taskmanagement")
    if(response)
    {
        console.log("Connected to DB")
    }
}
   catch(error){
        console.log(error)
    }
}
conn()