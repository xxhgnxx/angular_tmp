
import { Hero } from "./hero";
import { Component } from "@angular/core";  // angular核心库
@Component({
  selector: "my-app",                           // css选择器？
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <p>Heroes:</p>
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    `
})
export class AppComponent {

    title = "Tour of Heroes";


    heroes = [
  new Hero(1, "Windstorm"),
  new Hero(13, "Bombasto"),
  new Hero(15, "Magneta"),
  new Hero(20, "Tornado")
];
myHero = this.heroes[0];

 }                   // 导出该类，以便使用
