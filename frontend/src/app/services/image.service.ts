import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageApiService {
  baseURL = 'http://localhost:3000/api/image/';

  constructor(
    private http: HttpClient,
    private domSanitizer: DomSanitizer,
    ) { }

  getImageById(id: number) {
    const url = this.baseURL + '/:id';
    return this.http.get(url, {responseType: 'json'});
  }

  // myReader.onloadend = (e) => {
  //   this.base64Image = this.domSanitizer.bypassSecurityTrustUrl(myReader.result);
  //   console.log(this.base64Image);
  // }

}
