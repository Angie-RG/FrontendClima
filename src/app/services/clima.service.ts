import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getWeather(ciudad: string): Observable<any> {
    const url = `${this.apiUrl}?q=${ciudad},&APPID=${this.apiKey}`;
    return this.http.get(url)
  }
}
