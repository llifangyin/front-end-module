# Babel 把ES6送上天的通天塔
+ Babel is a javascript compiler
+ Babel 是巴比伦文化里的通天塔
+ the tower of Babel （通天塔：圣经故事，上帝惩罚而使彼此无法理解彼此的语言）

## 使用
+ babel cli
+ 配合打包工具 webpack、rollup等

1. npm init -y
2. npm install --save-dev @babel/core @babel/cli @babel/preset-env
3. 配置文件 babel.config.js
```js
const preset = [
    [
        '@babel/env',
        {
            debug: //查看babel转化了哪些与语法
        }
    ]
]
const plugins = []
if(process.env['ENV']==='prod'){
    plugins.push([])
}
module.exports = {presets,plugins}
```
+  preset配置用来编译的预置
+ 

4. package.json配置scripts
"babel": "babel src --out-dir dist",

## Babel工作原理