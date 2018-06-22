import { Component, OnInit } from '@angular/core';
import { HeroForm } from '../../domain/forms/HeroForm';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
  model = new HeroForm(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newHero() {
    this.model = new HeroForm(42, '', '');
  }


}
