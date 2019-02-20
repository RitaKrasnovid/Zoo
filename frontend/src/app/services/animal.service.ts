import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Animal } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AnimalApiService {
  baseURL = environment.baseUrl + '/api/animals';
  animals: Animal[];

  constructor(private http: HttpClient) { }

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.baseURL, {responseType: 'json'});
  }

  filter(param, value) {
    const options = {
      params: new HttpParams()
        .set(param, value)
    };
    return this.http.get<Animal[]>(this.baseURL, options);
  }

}
