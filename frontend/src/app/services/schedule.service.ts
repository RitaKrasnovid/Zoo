import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Schedule } from '../models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleApiService {
  baseURL = environment.baseUrl + '/api/schedule/';

  constructor(private http: HttpClient) { }

  getScheduleByDate(date): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.baseURL + date, {responseType: 'json'});
  }
}
