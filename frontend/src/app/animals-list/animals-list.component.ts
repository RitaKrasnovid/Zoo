import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/animal.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent implements OnInit {
  public animalData;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAnimals().subscribe(
      data => {
        this.animalData = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log('Animal component completed')
    );
  }

}
