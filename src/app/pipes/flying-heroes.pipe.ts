import { Pipe, PipeTransform } from '@angular/core';
import { Flyer } from '../domain/fly';

@Pipe({
  name: 'flyingHeroes',
  pure: false
})
export class FlyingHeroesPipe implements PipeTransform {

  transform(allHeroes: Flyer[]): any {
    return allHeroes.filter(hero => hero.canFly);
  }

}
