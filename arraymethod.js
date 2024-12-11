let arr =[23,24,25,26,27];
//push
arr.push(8);
console.log(arr);
//pop
arr.pop();
console.log(arr)
//shift
let b= arr.shift();
console.log(arr);
//unshuft
arr.unshift(1,2);
console.log(arr);
//length
let ar=["raj kumar"];
console.log(ar.length);
//splice
arr.splice(1,25,18);
console.log(arr);
//slice
let c = arr.slice(24,26);
console.log(arr);
//concat
let con=[1,2,3];
let con1=[4,5,6];
let co=con.concat(con1);
console.log(co);
//indexof
console.log(a.indexOf("24"));
//includes
let e = arr.includes(20);
console.log(e);
//for each
//arr.forEach((23){
//console.log(23);
//})
//every
let r=arr.every((Element)=>Element<23);
console.log(r);
//reverse
arr.reverse();
console.log(arr);
//sort
arr.sort();
console.log(arr);
//map
let f=arr.map((e)=>e*2);
console.log(f);
//filter
let d=arr.filter((e)=> e%2==0);
console.log(d);
//reduce
let sum=arr.reduce((acc,num)=>acc+num);
console.log(sum);













