function mobile(callback){
    setTimeout(()=>{
console.log("this is my new mobile");
callback();
   }, 2000);
}
function model(callback){
    setTimeout(()=>{
        console.log("model is vivoy20g");
        callback();
    },3000);
}
function price(callback){
    setTimeout(() => {
        console.log("mobile price is 15k");
        callback();
    }, 3500);
}
mobile(()=>{
    model(()=>{
        price(()=>{
            console.log("mobile base info completed");
            

        });
    });
});