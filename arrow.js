//basic arrow fnction:
const a=() =>{
   
    console.log("this is an arrow function");
}
   
    a();
    //arrow function with one parameter
    const b= x=> x*x;
    console.log(b(5));
    //arrow function with implicit return:
    const c = (a)=> {

        return a+1;
    
    }
    console.log(c(10));    //arrow function with multiple parameter:
    const d = (a,b)=>{
        return a*b;
    }
    console.log(d(4,2));  
     
    //array method :
    
    const sum = (a,b) => {
      return a**b; }

        console.log(sum(4,4));
        
    
       
    
    
    
