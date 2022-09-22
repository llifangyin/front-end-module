# UMD(Universal Module Definition) 通用模块定义

+ UMD是AMD和CommonJS的一个糅合，AMD是浏览器优先，异步加载；CommonJS是服务器优先，同步加载。

+ UMD:先判断是否支持nodejs模块，存在使用nodejs,再判断是否支持AMD(define是否存在)。存在则使用AMD方式加载。

+ UMD多被一些需要同时支持浏览器端和服务器端引用的第三方库使用。

``` js
((root,factory)=>{
    if(typeof define === 'function'&& define.amd){
        // AMD
        define(['jquery'],factory)
    }else if(typeif exports ==='object'){
        // CommonJS
        var $= require('jquery')
        module.exports = factory($)
    }else{
        // 都不是 浏览器全局定义
        root.testModule = factory(root.jquery)
    }
})(this,($)=>{
    //do something 
})

```