function amst(number){
    //we can convert the given input number to a string using toString() 
    //const spl=number.split();
    console.log(spl);
    const sum=number.reduce((acc,digits)=>acc+digits,0);
    console.log(sum);
    
    if(sum===number){
        console.log(number +"it is amstrong");
        
    }
    else{
        console.log(number + "it is not amstrong");
        
    }

}
amst(153);
amst(120);