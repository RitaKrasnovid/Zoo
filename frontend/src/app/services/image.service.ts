import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageApiService {
  baseURL = 'http://localhost:3000/api/image';
  constructor(
    private http: HttpClient,
    private domSanitizer: DomSanitizer,
    ) { }

  getImageById(id: number): Observable<Blob> {
    const url = this.baseURL + `/${id}`;
    return this.http.get(url, { responseType: 'blob' });
  }

}
