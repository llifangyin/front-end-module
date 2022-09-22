let {a,b} = require('./fun1')
console.log(a,b);

setTimeout(() => {
    console.log(a,b);
}, 1000);