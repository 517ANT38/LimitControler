const express=require("express");
const {queue, timeLimiter}=require("./module");
const consumerMy=require("./middleware/consumerMy");

const app=express();
queue.setLimit(3);
app.use(express.json());
app.post("/notes",[consumerMy],(req,res)=>{    
    let time=5000; 
    res.json({message:"Ok"})      
    let tId=setTimeout(function request(){
        if(queue.isEmpty()){
            clearTimeout(tId);
            return;
        }        
        console.log(queue.poll());
        
        tId=setTimeout(request,time)
    },time)
    
});
app.get("/time",(req,res)=>{
    timeLimiter.incrementCurrCountQuery();
    if(timeLimiter.isCheck()){
        
        return res.json({message:"Ok"});
    }
    res.status(429).json({message:"Server overflow"});
})
app.listen(3030,()=>{
    console.log("Server start.....");
    timeLimiter.loopTimer();
})