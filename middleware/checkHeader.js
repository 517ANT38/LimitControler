function checkHeader(req,res,next){
    console.log(res.writableFinished)
    if(res.writableEnded){
        res.flushHeaders();
    }
    next();
}
module.exports=checkHeader;