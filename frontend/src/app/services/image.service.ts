import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageApiService {
  baseURL = environment.baseUrl + '/api/image/';

  constructor(
    private http: HttpClient,
  ) { }

  getImageById(id: number) {
    const url = this.baseURL + `${id}`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
