// 在systemjs中，我们设置了 main.js为主入口，所以在这里我们要完成组件的加载过程
// main.js 是一个引导过程，独立编写  123

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"; // 浏览器用组件？
import { AppModule } from "./app.module";           // 引入我写的app
const platform = platformBrowserDynamic();          // 实例化浏览器组件？
platform.bootstrapModule(AppModule);                // 看起来是使用这个东西来完成app的功能？
