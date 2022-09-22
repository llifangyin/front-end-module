seajs.use(['math.js'],function(math){
    let total = math(10086,10010)
    console.log(total,'seajs引入模块计算方法');
})