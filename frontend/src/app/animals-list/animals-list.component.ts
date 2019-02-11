import { Component, OnInit } from '@angular/core';
import { AnimalApiService } from '../services/animal.service';
import { Animal } from '../models';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent implements OnInit {
  public animals: Animal[];

  constructor(private apiService: AnimalApiService) { }

  ngOnInit() {
    this.apiService.getAnimals().subscribe(
      (data: Animal[]) => {
        this.animals = data;
      },
      err => console.log(err),
      () => console.log('Animals list component completed')
    );
  }

}
