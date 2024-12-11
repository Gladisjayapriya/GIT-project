function greet(name,callback){
    console.log(name);
    callback();
}
function greeting (){
    console.log("goodbye");
    
}
greet("kalai",greeting)