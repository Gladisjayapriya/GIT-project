function amazonn(){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        const order=true;
        if(order){
        resolve("orde to watch")}
        else{
            reject("cancel")
        }

        
    }, 2000);
}
    )}

    function brand(){
        return new Promise((resolve,reject) => {
        setTimeout(() => {
            const list = true;
            if(list){
    
             resolve("searching branded ");
            }
else{
    reject("did't show list");}

            

        
},1000);
        });
    }
    
    function fastrack(){
        return new Promise((resolve,reject)=>{

        
        setTimeout(() => {
            
       const type=true;
       if(type){
        resolve("order fastrack")}
        else{
            reject("order failed")
        }
        })
        
    }, 2500);
    }

    function ok(){
        return new Promise((resolve,reject)=>{

        setTimeout(() => {
            const conf = false;
            if (conf){
            resolve("order conformed")}
            else{
                reject("closed")
            }
        })
           
        }, 3000);
    }
    
    // amazonn()
    // .then((value)=>{
    //     console.log(value);
    //     return brand();
        
    // })
    // .then((value)=>{
    //     console.log(value);
    //     return fastrack();
        
    // })
    // .then((value)=>{
    //     console.log(value);
    //     return ok();
        
    // })
   

    // .catch((Error)=>{
    //     console.error(Error);  
        

    // })
    //using await function
    async function call(){
        try{
            let a1=await amazonn();
            console.log(a1);
            let a2=await fastrack();
            console.log(a2);
            let a3=await brand();
            console.log(a3);
            let a4=await ok();
            console.log(a4);
          }  catch (error){
                console.log(error);
                
            }
             
        }
    
call();