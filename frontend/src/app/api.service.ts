import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getAnimals() {
    const url = this.baseURL + 'animals';
    return this.http.get(url, {responseType: 'json'});
  }
}
