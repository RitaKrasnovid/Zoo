import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { News } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  baseURL = 'http://localhost:3000/api/news/';

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.baseURL, {responseType: 'json'});
  }

  getNewsById(id): Observable<News> {
    return this.http.get<News>(this.baseURL + id, {responseType: 'json'});
  }

  getMainNews(): Observable<News[]> {
    const url = this.baseURL + 'main';
    return this.http.get<News[]>(url, {responseType: 'json'});
  }
}
