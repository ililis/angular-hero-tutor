import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

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
    this.getHeroes();
    console.log(this.singlehero.name);
  }
  ngAfterContentChecked(): void {
    // console.log(this.singlehero.name);
  }
  constructor(private heroService: HeroService) {}
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  // heroes = HEROES;
  heroes: Hero[] = [];

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero.name);
  }
}
