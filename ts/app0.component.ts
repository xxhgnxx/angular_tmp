import { Component, OnInit  } from "@angular/core";   // oninit组建，用于加载服务数据的独立接口
import {Hero} from "./hero";
import { HeroService } from "./hero.service";




@Component({
    selector: "my-app",
    template: `
  <h1>{{title}}</h1>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes"
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
    providers: [HeroService]            // 注册服务提供商，告诉angular有一个HeroService要被注册成服务
})
export class AppComponent implements OnInit {   // 加载oninit接口，该接口单独提供加载服务中的数据的地方

    title = "Tour of Heroes";
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) { }       // @装饰器在初始化或者说实例化AppComponent的时候，前文的providers属性中的服务商HeroService会在此处对服务进行真正的实例化，产生heroService类(产生服务heroService)，

    getHeroes(): void {                     // 从服务中获取数据的方法
        this.heroService.getHeroes().then((heroes) => { return this.heroes = heroes; }); // 调用heroService的get方法获取数据，该方法被promise加工过，所以附加了then方法，then方法，只定义了成功方法
    }

    ngOnInit(): void {                          // 获取数据方法的启动点，实际上是oninit额外提供的启动点，增加了一个环节
        this.getHeroes();
    }

    onSelect(hero: Hero): void {            // 界面中方法
        this.selectedHero = hero;
    }
}
