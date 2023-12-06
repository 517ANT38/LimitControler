class Queue{
    #_arr=[];
    #_limit=0;
    poll(){
        return this.#_arr.pop();
    }
    push(v){
        this.#_arr.unshift(v);
    }
    isFull(){
        return this.#_arr.length==this.#_limit;
    }
    isEmpty(){
        return this.#_arr.length==0;
    }
    setLimit(v){
        this.#_limit=v;
    }
}
module.exports=Queue;