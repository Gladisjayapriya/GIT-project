//callback hell:
function fun(a){
    console.log("this is fun");
    a();
}
    function fun1(callback){
        console.log("this is fun1");
      
       callback();}


        function fun2(callback){
            console.log("this is fun2");
            
        
        callback();}


        fun2(()=>{
            fun1(()=>{
                fun(()=>{
             } );
            });
        });
    
    
