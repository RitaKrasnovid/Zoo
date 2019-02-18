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
  countResult: number;

  constructor(private apiService: AnimalApiService) { }

  ngOnInit() {
    this.animals$ = this.apiService.getAnimals();
  }

  filterByName(filterValue) {
    if (filterValue.search_type.type === 'contains') {
      this.animals$ = this.apiService.filterByNameContainsValue(filterValue.search_value);
     }
  }

}
