//template literals:
let firstname="glad";
let na="and"
let secondname="roja";
console.log(`hello, ${firstname}, ${na} ${secondname}`);


//without template literals:
let name="athi";
let name1="thiru";
console.log('hello' + "   " + name + "  " + name1);

//function express:
const greet1 = function (type){
console.log(`hello, ${type}`);
}
greet1( 'glad');


 //callback function:
 function greet (name, callback){
 console.log(`hello, ${name}`);
 callback();
 }
 function greeting (){
 console.log("welcome");   
 }
 greet("roja", greeting );

//immediate invoked function express (IIFE):
(function () {
    console.log(`hii im gladis`);

})
();

