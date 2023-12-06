const Queue=require("./queue");
const TimeLimiter=require("./TimeLimiter");
const timeLimiter=new TimeLimiter();
const queue=new Queue();
module.exports.queue=queue;
module.exports.timeLimiter=timeLimiter;