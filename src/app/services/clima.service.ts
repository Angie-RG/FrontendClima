import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Historial } from '../models/historial';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;
  private apiRes = environment.apiRest;

  constructor(private http: HttpClient) { }

  getWeather(ciudad: string): Observable<any> {
    const url = `${this.apiUrl}?q=${ciudad},&APPID=${this.apiKey}`;
    return this.http.get(url)
  }

  createHistory(historial: Historial): Observable<Historial> {
    console.log(historial);
    return this.http.post<Historial>(`${this.apiRes}add`, historial);
  }

  getHistory(): Observable<Historial[]> {
    return this.http.get<Historial[]>(`${this.apiRes}all`);
  }
}
