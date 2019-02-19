import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AnimalApiService } from '../services/animal.service';
import { Animal } from '../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalsListComponent implements OnInit {
  public animals$: Observable<Animal[]>;
  public countResult: number;
  public orderTitle = 'animals';

  constructor(private animalApiService: AnimalApiService) { }

  ngOnInit() {
    this.animals$ = this.animalApiService.getAnimals();
  }

  filterByName(filterValue) {
    if (filterValue.search_type.type === 'contains') {
      this.animals$ = this.animalApiService.filterByNameContainsValue(filterValue.search_value);
     }
  }

  filterByOrder(order: string) {
    this.orderTitle = order;
    this.animals$ = this.animalApiService.filterAnimalsByOrder(order);
  }
}
