const {queue}=require("../module");
async function consumerMy(req,res,next){
    
    if(queue.isFull()){
      return  res.status(429).json({message:"Queue overflow"});
    }
    queue.push(req.body);    
    next();
}
module.exports=consumerMy;