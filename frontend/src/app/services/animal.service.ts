import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Animal } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AnimalApiService {
  baseURL = 'http://localhost:3000/api/animals';

  constructor(private http: HttpClient) { }

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.baseURL, {responseType: 'json'});
  }

}
