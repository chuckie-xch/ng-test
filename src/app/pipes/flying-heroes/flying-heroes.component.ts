import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../mock-heros';

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styleUrls: ['./flying-heroes.component.css']
})
export class FlyingHeroesComponent implements OnInit {

  heroes: any[] = [];
  canFly = true;

  constructor() {
    this.reset();
  }

  ngOnInit() {
  }

  addHero(name: string) {
    name = name.trim();
    if(!name) {
      return;
    }
    let hero = {name, canFly: this.canFly};
    this.heroes.push(hero);
    // this.heroes = JSON.parse(JSON.stringify(this.heroes));
  }

  reset() {
    this.heroes = HEROES.slice();
  }

}
