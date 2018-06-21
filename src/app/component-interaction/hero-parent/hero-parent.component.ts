import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../mock-heros';
import { Hero } from '../../domain/hero';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {

  heroes: Hero[] = HEROES;
  master: string = 'Master';

  constructor() { }

  ngOnInit() {
  }

}
