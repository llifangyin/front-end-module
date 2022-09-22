## ESModule

+ export 
    + export default
    + exprot let xxx
    + export function xxx
    + export {xxx,xxx}
+ import
    + import * as xxx
    + import {xxx,xxx}


- ES6的模块不是对象，import命令会被JavaScript引擎静态分析，在编译时就引入模块代码，而不是在代码运行时加载，所以无法实现条件加载，正因如此，是的静态分析成为可能。

+ import/export必须位于模块顶级，不能位于作用域内，模块内的import/export会提升到模块顶部。


## ES6模块与CommonJS的差异

1. CommonJS模块输入的是一个值的拷贝，ES6模块输出的是值的引用。
+ CommonJS模块内部的变化影响不到输出的值
+ ES模式是动态引用，模块里的变量绑定其所在的模块

2. CommonJS模块是运行时加载，ES模块是编译时输出接口

+ 运行时加载：CommonJS模块是对象，在输入时先加载整个模块，生成一个对象，然后从这个对象上读取方法。
+ 编译时加载：ES模块不是对象，通过export命令显示指出输出的代码，import时采用静态命令的形式。在import时可以指定加载某个输出值，而不是加载整个模块，这种加载成为编译时加载。模块内部的引用的变化，会反应在外部。


+ html里引用 type='nodule'
+ node里引用： .mjs

