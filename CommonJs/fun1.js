let a = 1,
b = {num:1}

setTimeout(() => {
    a=2
    b = {num:2}
}, 500);

module.exports ={
    a,b
}

