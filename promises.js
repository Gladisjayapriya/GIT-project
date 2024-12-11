function mobile(){

    return new Promise((resolve,reject) => {

    setTimeout(()=>{
resolve("this is my new mobile");
//callback();
   }, 2000);
})
}

function model(){
    return new Promise((resolve,reject) => {
  
    setTimeout(()=>{
        resolve("model is vivoy20g");
        //callback();
    },3000);
})
}

function price(){
    return new Promise((resolve,reject) => {

    setTimeout(() => {
        resolve("mobile price is 15k");
        //callback();
    }, 3500);
})
}

mobile()
.then((value)=> {
    console.log(value);
    return model();
    })
    .then
     ((value)=> {
        console.log(value);
        return price();

    });

    
