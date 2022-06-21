import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero.model';
import { MessageService } from './message.service';
import { HEROES } from './mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService){}

 getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  this.messageService.add('HeroService: getched heroes');
   return heroes;
 }
 getHero(id: number): Observable<Hero> {
  const hero = HEROES.find((hero) => hero.id === id)!;
  this.messageService.add(`heroService fetched hero id=$(id)`);
  return of(hero);
 }
}
