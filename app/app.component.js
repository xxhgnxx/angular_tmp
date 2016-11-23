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
var hero_1 = require("./hero");
var core_1 = require("@angular/core"); // angular核心库
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Tour of Heroes";
        this.heroes = [
            new hero_1.Hero(1, "Windstorm"),
            new hero_1.Hero(13, "Bombasto"),
            new hero_1.Hero(15, "Magneta"),
            new hero_1.Hero(20, "Tornado")
        ];
        this.myHero = this.heroes[0];
    }
    return AppComponent;
}()); // 导出该类，以便使用
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <h1>{{title}}</h1>\n    <h2>My favorite hero is: {{myHero.name}}</h2>\n    <p>Heroes:</p>\n    <input #box (keyup)=\"0\">\n    <p>{{box.value}}</p>\n    <ul>\n      <li *ngFor=\"let hero of heroes\">\n        {{ hero.name }}\n      </li>\n    </ul>\n    <p *ngIf=\"heroes.length > 3\">There are many heroes!</p>\n    "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map