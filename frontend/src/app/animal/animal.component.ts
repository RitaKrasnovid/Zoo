import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
  public animalData;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAll('animals').subscribe(
      data => {
        this.animalData = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log('Animal component completed')
    );
  }

}
