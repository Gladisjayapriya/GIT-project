//asynchronous (not the order)
function walkdog( ){
    setTimeout(() => {
        console.log("walk the dog");
        
      
    }, 3000);
}
function trashot(){
    setTimeout(() => {
        console.log("clean");
       
        
    }, 2000);
}
function clean() {
    
    setTimeout(() => {
        console.log("out");
        
        
    }, 1500);
}
function ask() {
     setTimeout(()=>{
         console.log("ask the ques");
        
     },4000);
    
 }
walkdog();
trashot();
clean();
//ask();