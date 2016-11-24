// 实现模块app展示的过程
// 在这里修饰器？相关的内容，

import { NgModule }      from "@angular/core";              // angular核心库
import { BrowserModule } from "@angular/platform-browser";  // 程序跑在浏览器中，所以调用浏览器模块？
import { AppComponent }   from "./app.component";           // 我们自己些的组件类
import {ClickMeComponent} from "./click-me.componet";
@NgModule({                                     // 修饰器
    imports: [BrowserModule],              // 选择，环境
    declarations: [AppComponent, ClickMeComponent],               // 规则或管道设置
    bootstrap: [AppComponent, ClickMeComponent]                // 引导是组件设置，自动添加到需要编译的列表entryComponents中
})
export class AppModule { }                  // 导出该类，以便引用
 //  123
