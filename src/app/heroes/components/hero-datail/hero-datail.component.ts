import { Location } from '@angular/common';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../.././core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';

@Component({
  selector: 'app-hero-datail',
  templateUrl: './hero-datail.component.html',
  styleUrls: ['./hero-datail.component.scss']
})
export class HeroDatailComponent implements OnInit {
  hero!: Hero;

  constructor(private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
    ){}

    ngOnInit(): void {
      this.getHero();
    }

    getHero(): void{
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
    }

    goBack(): void {
      this.location.back();
    }
}
