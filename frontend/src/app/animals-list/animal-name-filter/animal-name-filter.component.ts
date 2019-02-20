import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-animal-name-filter',
  templateUrl: './animal-name-filter.component.html',
  styleUrls: ['./animal-name-filter.component.scss'],
})
export class AnimalNameFilterComponent implements OnInit {
  @Input() countResult: number;
  @Output() filtering: EventEmitter<any> = new EventEmitter<any>();

  public filterTypes = [
    { type: 'name', value: 'Filter by Name' },
  ];

  public searchTypes = [
    { type: 'contains', value: 'Contains' },
  ];

  public filter = new FormGroup({
    filter_type: new FormControl(this.filterTypes[0]),
    search_type: new FormControl(this.searchTypes[0]),
    search_value: new FormControl(),
  });

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    if (this.filter.value.filter_type.type === 'name') {
      this.filtering.emit(this.filter.value);
    }
  }

  get filter_type() { return this.filter.get('filter_type'); }
  get search_type() { return this.filter.get('search_type'); }
  get search_value() { return this.filter.get('search_value'); }

}
