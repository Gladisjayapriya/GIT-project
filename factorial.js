//factorial is multiple the given number in backward
//eg:6(6*5*4*3*2*1)
function fact(n){
    let res=1;
    if(n==0)
        return 1;
    for(let i=2;i<=n;i++)
        res=res*i;
    return res;
}
let n = 6;
console.log(fact(n));

