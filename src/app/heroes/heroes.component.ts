import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  singlehero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  // nothero = 'what??';

  ngOnInit(): void {
    // this.hero.name = "lalala"
    console.log(this.singlehero.name);
  }
  ngAfterContentChecked(): void {
    // console.log(this.singlehero.name);
  }

  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero.name);
  }
}
