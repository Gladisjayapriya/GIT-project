//destructure in array
 const arr=["aswin","balaji","kalai","sanjay"];
 const [,name2]=arr;
 console.log(name2);
 
const [,,,...name4]=arr;//...rest parameter
 console.log(name4);

//destructue an object:
let name1 ={
    name: "alice",
    age: 25,
    isemployee:true,
    id: 123,
    present:true,
};
const {name:fullname,age:get}=name1;
console.log(fullname,get);
const  {name,age,...isemployee}=name1;
console.log(isemployee);





