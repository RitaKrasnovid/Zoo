import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../models';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
  @Input() animal: Animal;

  constructor() { }

  ngOnInit() {
  }

}
