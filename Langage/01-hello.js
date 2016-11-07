
console.log('Bonjour à tous');

var id = setInterval(function hello() {
    console.log('Hello');
}, 1000);

console.log(typeof hello); // undefined

setTimeout(function() {
    console.log('Bye');
    clearInterval(id);
}, 4000);
