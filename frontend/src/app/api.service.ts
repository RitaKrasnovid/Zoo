import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getAll(apiItem: string) {
    return this.http.get(this.baseURL + apiItem, {responseType: 'json'});
  }
}
