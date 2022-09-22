# 前端模块化

## 发展过程
NodeJS之前，前端不存在模块化，后端有模块化。
NodeJS诞生之后，它开始使用CommonJS模块化规范。


## 特点
一个文件就是一个模块，有自己的作用域，只向外暴漏特定的变量和函数。

目前流行的模块化规范有 **[CommonJs](./CommonJs/CommonJs.md 'CommonJs')、[AMD](./AMD/AMD.md 'AMD')、[CMD](./CMD/CMD.md 'CMD')、[UMD](./UMD/UMD.md 'UMD')、[ESmodule](./ESmodule/ESmodule.md 'ESmodule')**

## 一览表
![module关系](./modules.jpg '模块')
## webpack支持性
![module关系](./webpackKnow.jpg 'webpack支持性')

## 总结

1. AMD/CMD/CommonJs 是js模块化开发的规范，对应的实现是require.js/sea.js/Node.js
2. CommonJs 主要针对服务端，AMD/CMD/ES Module主要针对浏览器端，容易混淆的是AMD/CMD。
3. AMD与CMD
### 区别：
AMD是预加载，在并行加载js文件同时，还会解析执行该模块（因为还需要执行，所以在加载某个模块前，这个模块的依赖模块需要先加载完成）；而CMD是懒加载，虽然会一开始就并行加载js文件，但是不会执行，而是在需要的时候才执行。
### 优缺点：
* AMD优点：加载快速，尤其遇到多个大文件，因为并行解析，所以同一时间可以解析多个文件。
* AMD缺点：并行加载，异步处理，加载顺序不一定，可能会造成一些困扰，甚至为程序埋下大坑。
* CMD优点：因为只有在使用的时候才会解析执行js文件，因此，每个JS文件的执行顺序在代码中是有体现的，是可控的。
* 

4. CommonJS 和 ES Module 区别：CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用

5. 如何使用？CommonJs 的话，因为 NodeJS 就是它的实现，所以使用 node 就行，也不用引入其他包。AMD则是通过<script>标签引入require.js，CMD则是引入sea.js

6. UMD是AMD和CommonJS的糅合