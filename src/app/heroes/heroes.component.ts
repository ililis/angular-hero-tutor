import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

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

  selectedHero?: Hero;

  // heroes = HEROES;
  heroes: Hero[] = [];

  ngAfterContentChecked(): void {
    // console.log(this.singlehero.name);
  }

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    console.log(hero.name);
  }
}
