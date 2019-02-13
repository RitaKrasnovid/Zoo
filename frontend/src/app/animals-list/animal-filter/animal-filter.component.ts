import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AnimalApiService } from 'src/app/services/animal.service';
import { Animal } from 'src/app/models';

@Component({
  selector: 'app-animal-filter',
  templateUrl: './animal-filter.component.html',
  styleUrls: ['./animal-filter.component.scss']
})
export class AnimalFilterComponent implements OnInit {
  animals: Animal[];
  countResult: number;

  @Output() update: EventEmitter<Animal[]> = new EventEmitter<Animal[]>();

  public filterTypes = [
    { type: 'name', value: 'Filter by Name' },
  ];

  public searchTypes = [
    { type: 'contains', value: 'Contains' },
  ];

  public filter = new FormGroup({
    filter_type: new FormControl('Choose filter type'),
    search_type: new FormControl('Choose search type'),
    search_value: new FormControl(),
  });

  constructor(private animalService: AnimalApiService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.filter.value.filter_type.type === 'name') {
      this.filterByName(this.filter.value.search_type.type, this.filter.value.search_value);
    }
  }

  filterByName(searchType: string, value: string) {
    if (searchType === 'contains') {
      this.animalService.filterByNameContainsValue(value).subscribe(
        (results: Animal[]) => {
          this.animals = results;
          this.countResult = this.animals.length;
          this.update.emit(this.animals);
        },
        err => console.log(err)
      );
    }
  }

  get filter_type() { return this.filter.get('filter_type'); }
  get search_type() { return this.filter.get('search_type'); }
  get search_value() { return this.filter.get('search_value'); }

}
