import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { AnimalApiService } from '../services/animal.service';
import { Animal } from '../models';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalsListComponent implements OnInit {
  public animals$: Observable<Animal[]>;
  public countResult: number;
  public animalClassTitle = 'animals';

  constructor(
    private animalApiService: AnimalApiService,
    private readonly router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.animals$ = this.animalApiService.getAnimals();
  }

  filterByName(filterValue) {
    const param = 'search';

    if (filterValue.search_type.type === 'contains') {
      this.router.navigate(['/animals'], { queryParams: { search: filterValue.search_value } });
      this.animals$ = this.animalApiService.filter(param, filterValue.search_value);
    }
  }

  filterByClass(value: string) {
    const param = 'class';

    this.animalClassTitle = value;
    this.router.navigate(['/animals'], { queryParams: { order: value } });
    this.animals$ = this.animalApiService.filter(param, value);
  }
}
