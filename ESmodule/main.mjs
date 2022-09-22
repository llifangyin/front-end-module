import {a,b} from './fun1.mjs'
console.log(a,b);
setTimeout(() => {
    console.log(a,b);
}, 1000);