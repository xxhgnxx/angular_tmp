// 在systemjs中，我们设置了 main.js为主入口，所以在这里我们要完成组件的加载过程
// main.js 是一个引导过程，独立编写  123
"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic"); // 浏览器用组件？
var app_module_1 = require("./app.module"); // 引入我写的app
var platform = platform_browser_dynamic_1.platformBrowserDynamic(); // 实例化浏览器组件？
platform.bootstrapModule(app_module_1.AppModule); // 看起来是使用这个东西来完成app的功能？
//# sourceMappingURL=main.js.map