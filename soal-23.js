let max = 34;
let a = 0, b = 1;
let fib = [a];

while (b <= max) {
    fib.push(b);
    let temp = a + b;
    a = b;
    b = temp;
}
console.log(fib.join(","));