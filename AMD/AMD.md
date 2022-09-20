
# AMD (Asynchronous Module Definition) 

## 诞生背景:浏览器端的模块,不能同步加载,只能异步加载

+ 异步加载模式,模块的加载不影响之后语句的运行
+ 所有依赖这个模块的语句,定义在一个回调中,模块加载完成后,回调函数执行.

主要两个库实现了AMD规范:**require.js 和 curl.js**

requirejs诞生解决两个问题:
+ 实现js文件的异步加载,避免网页失去响应
+ 管理模块之间的依赖性,便于代码的编写和维护

## requirejs的使用

1. 引用方式
+ 加载require.js时, 使用async表明这个文件异步加载. defer(兼容ie不支持)
+ data-main 指定网页程序的主模块
``` js
<script src='js/require.js' defer async='true'
data-main='js/main' ></script>
```


2. 模块加载的配置
``` js
require.config({
    paths:{
        xxx:xxx
    }
})

```

3. AMD模块的写法与使用
``` js
define(function(){
    xxx
    return {
        xxx:xxx
    }
})

require([module],callback)
```

4. 加载非模块化的库
例如 underscore,backbone 没有用AMD规范写,加载需要先定义他们的特征
+ shim 处理不兼容的模块
    + exports 表明模块外部调用时的名称
    + deps数组 表明该模块的依赖性
```js
require.config({
    shim:{
        "underscore":{
            exports:"_"
        },
        "backbone":{
            deps:["underscore","jquery"],
            exports:'backbone'
        },
        'jquery.scroll':{
            deps:['jquery'],
            exports:'jquery.fn.scroll'
        }
    }
})
```

5. requirejs插件 
+ domready 可以让回调函数在dom解构加载完成后运行
+ text image插件,允许require加载文本和图片文件
