import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api/anomalies';

  constructor(private http: HttpClient) {}

  getAnomalies(startDate: string, endDate: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?startDate=${startDate}&endDate=${endDate}`);
  }
}
