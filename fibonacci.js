    
function fibonacciSeries(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];

      //2=[2-1]+[2-2]
      //2=1+0=1
      //=2-1=1
    }
    return fib.slice(0, n);
}
// Example: Generate the first 10 numbers in the Fibonacci series
console.log(fibonacciSeries(6));