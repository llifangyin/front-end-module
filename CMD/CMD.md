# CMD(Common Module Definition)

- 诞生背景：CMD是Sea.js（阿里 玉伯）在推广过程中对模块化定义的规范化产出,诞生在 RequireJs之后，AMD规范是异步的，模块的组织形式不够自然和直观。CMD追求能像CommonJS那样的书写形式。

## 使用：

1. 引入sea.js

2. 定义模块 加载模块
```js
define(function(require,exports,module) {
    var a = require(xxx)
    exports.dosomething...
    module.exports = ...
})
```


CMD与AMD的区别：
- AMD推崇前置前行，提前执行
- CMD推崇依赖就近，延迟执行
- CMD不被webpack识别