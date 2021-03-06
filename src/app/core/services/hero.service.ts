import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesURL = `${environment.baseURL}/heroes`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    
     ){}

     // GET /heroes
 getHeroes(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesURL).pipe(
    tap((heroes) => this.log(`fetched ${heroes.length} hero(es)`)));


 }
    // GET /heroes/id
 getHero(id: number): Observable<Hero> {
  return this.http.get<Hero>(`${this.heroesURL}/${id}`).pipe(
    tap((hero) => this.log(`fetched hero id=${id} and name=${hero.name}`))
  );
 }

 private log (message:string): void {
  this.messageService.add(`HeroService: ${message}`)
 }
}
