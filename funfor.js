let arr=["apple", "banan", "jackfrit"];
for (let fruits of arr) {

console.log(fruits);
}

let obj={
    name: "glad",
    id: 34,
    isemployee: true,
};
for(let key in obj){
    console.log(key);
    console.log(obj[key]);

}
let arreach=["apple", "banan", "jackfrit"];
arreach.forEach((a,b,c)=>{ //a mean that value, b mean that index, and c mean that array
console.log(a,b,c);
});
