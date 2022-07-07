function fibo(){
    let a = 0, b = 1, c;

    return function fibonacci() {
        c = a + b;
        a = b;
        b = c;
        
        return a;
    };
}

let fib = fibo();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13