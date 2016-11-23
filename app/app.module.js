// 实现模块app展示的过程
// 在这里修饰器？相关的内容，
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core"); // angular核心库
var platform_browser_1 = require("@angular/platform-browser"); // 程序跑在浏览器中，所以调用浏览器模块？
var app_component_1 = require("./app.component"); // 我们自己些的组件类
var click_me_componet_1 = require("./click-me.componet");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [app_component_1.AppComponent, click_me_componet_1.ClickMeComponent],
            bootstrap: [app_component_1.AppComponent, click_me_componet_1.ClickMeComponent] // 引导是组件设置，自动添加到需要编译的列表entryComponents中
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule; // 导出该类，以便引用
//# sourceMappingURL=app.module.js.map