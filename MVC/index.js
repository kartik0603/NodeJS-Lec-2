const express = require("express");
const dbConnect= require("./config/db")
const userRouter =require ("./routes/user.route")



const app = express();
app.use(express.json());



app.get("/",(req,res)=>{
    res.send("Working")
})

app.use("/user",userRouter)



app.listen(8089,()=>{
    console.log("server is running on port 8089");
    
})