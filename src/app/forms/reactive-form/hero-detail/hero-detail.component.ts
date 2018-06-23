import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { states, Address, Hero } from '../../../domain/reactive-form/data-model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit, OnChanges {

  @Input() hero: Hero;

  heroForm: FormGroup;
  states = states;
  nameChangeLog: string[] = [];

  logNameChange() {
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach(
      value => this.nameChangeLog.push(value)
    );
  }

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService
  ) {
    this.createForm();
    this.logNameChange();
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  ngOnInit() {
  }

  get secretLairs() {
    return this.heroForm.get('secretLairs') as FormArray;
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      // address: this.fb.group(new Address()),
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });
  }

  rebuildForm() {
    this.heroForm.reset({
      name: this.hero.name
      // address: this.hero.addresses[0] || new Address()
    });

    this.setAddresses(this.hero.addresses);
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  onSubmit() {
    this.hero = this.prepareSaveHero();
    this.heroService.updateHero(this.hero).subscribe();
    this.rebuildForm();
  }

  prepareSaveHero(): Hero {
    const formModel = this.heroForm.value;
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    const saveHero: Hero = {
      id: this.hero.id,
      name: formModel.name as string,
      addresses:secretLairsDeepCopy
    };
    return saveHero;
  }

  revert() { this.rebuildForm(); }
}
