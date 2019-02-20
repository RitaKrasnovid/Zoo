import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { animalsClasses } from '../../constants/animals-classes';

@Component({
  selector: 'app-animal-class-filter',
  templateUrl: './animal-class-filter.component.html',
  styleUrls: ['./animal-class-filter.component.scss']
})
export class AnimalClassFilterComponent implements OnInit {
  @Output() filtering: EventEmitter<any> = new EventEmitter<any>();
  @Input() title: string;
  public animalsClasses = animalsClasses;

  constructor() { }

  ngOnInit() {
  }

  filterByClass(animalClass) {
    this.filtering.emit(animalClass);
  }
}
