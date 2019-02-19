import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-animal-order-filter',
  templateUrl: './animal-order-filter.component.html',
  styleUrls: ['./animal-order-filter.component.scss']
})
export class AnimalOrderFilterComponent implements OnInit {
  @Output() filtering: EventEmitter<any> = new EventEmitter<any>();
  @Input() title: string;

  public orders = [
    'mammals', 'birds', 'reptiles', 'fish', 'amphibia', 'Carnivora'
  ];

  constructor() { }

  ngOnInit() {
  }

  filterByOrder(order) {
    this.filtering.emit(order);
  }
}
