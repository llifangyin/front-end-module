# CommonJs  

CommonJS采用同步方式加载模块。在服务端，模块文件都放在本地磁盘，读取速度非常块。

四个环境变量：
+ module 
+ export 
+ require 
+ global

- 实际使用时，用module.export定义当前模块对外暴漏的接口。
- 浏览器端不适用，会阻塞页面渲染，出现假死状态。