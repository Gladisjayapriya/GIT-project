// let rev="welcome to the class";
// ans=rev.split('').reverse().join('');
// console.log(ans);
let ar = ["i", "like", "this", "program", "very", "much"];

let ans= "";
for (let i = 5; i >= 0; i--) {
    ans += ar[i] + " ";
}

console.log("Reversed String:");
console.log(ans.slice(0, ans.length ));



