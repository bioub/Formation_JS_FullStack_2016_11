
console.log('Bonjour à tous');

// named function expression
var id = setInterval(function hello() {
    console.log('Hello');
}, 1000);

console.log(typeof hello); // undefined

// anonymous function expression
setTimeout(function() {
    console.log('Bye');
    clearInterval(id);
}, 4000);
