class TimeLimiter{
    #currCountQuery = 0;    
    #prevCountQuery=0;
    #timeList=[];
    #milliseconds=10;
    #nQuery=7;
    #resCheck=true;
    
    isCheck(){
        return this.#resCheck;
    }
    set milliseconds(value){
        this.#milliseconds=value
    }
    
    set currCountQuery(value) {
        this.#currCountQuery = value;
    }
    set nQuery(value){
        this.#nQuery=value;
    }
    incrementCurrCountQuery(){
        this.#currCountQuery++;
        this.#timeList.push(Date.now());
    }
    loopTimer(){       
       let t1=Date.now();
       let prevTime=0.0;  
       let func=()=>{
            let t2=Date.now();            
            let answer=Math.floor(prevTime*this.#prevCountQuery+this.#currCountQuery);
            let p=(this.#timeList.length==0)?0:
                this.#timeList[this.#timeList.length-1]-this.#timeList[0];
            prevTime=p/(t2-t1);
            this.#resCheck=this.#currCountQuery<=answer&&answer<this.#nQuery;  
            this.#prevCountQuery=this.#currCountQuery; 
            this.#currCountQuery=0;
            this.#timeList.length=0;
            
            t1=Date.now();
            setTimeout(func,this.#milliseconds)
        }  
       let tId=setTimeout(func,this.#milliseconds);
       
    }    
}
module.exports=TimeLimiter;