import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Animal } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AnimalApiService {
  baseURL = environment.baseUrl + '/api/animals';

  constructor(private http: HttpClient) { }

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.baseURL, {responseType: 'json'});
  }

  filterByNameContainsValue(value: string) {
    return this.http.get<Animal[]>(this.baseURL + value, {responseType: 'json'});
  }

  filterAnimalsByOrder(value: string) {
    const urlForOrderFilter = this.baseURL + 'order/' + value;
    return this.http.get<Animal[]>(urlForOrderFilter, {responseType: 'json'});
  }
}
