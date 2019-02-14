import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AnimalApiService } from 'src/app/services/animal.service';
import { Animal } from 'src/app/models';

@Component({
  selector: 'app-animal-order-filter',
  templateUrl: './animal-order-filter.component.html',
  styleUrls: ['./animal-order-filter.component.scss']
})
export class AnimalOrderFilterComponent implements OnInit {
  @Output() update: EventEmitter<Animal[]> = new EventEmitter<Animal[]>();

  public orders = [
    'mammals', 'birds', 'reptiles', 'fish', 'amphibia',
  ];
  public animals: Animal[];
  public title: string = 'animals';

  constructor(private animalService: AnimalApiService) { }

  ngOnInit() {
  }

  filterByOrder(order: string) {
    this.title = order;
    this.animalService.filterAnimalsByOrder(order).subscribe(
      (results: Animal[]) => {
        this.animals = results;
        this.update.emit(this.animals);
      },
      err => console.log(err)
    );
  }
}
