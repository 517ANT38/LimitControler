const {queue}=require("../module");
function consumerMyGet(req,res,next){
    
    if(queue.isFull()){
        res.json({message:"Queue overflow"});
        return;
    }
    queue.push(req.params.i);    
    next();
}
module.exports=consumerMyGet;