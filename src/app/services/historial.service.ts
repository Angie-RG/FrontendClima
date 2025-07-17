import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Historial } from '../models/historial';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private apiUrl = environment.apiRest;

  constructor(private http: HttpClient) { }

  getHistory(): Observable<Historial[]> {
    return this.http.get<Historial[]>(`${this.apiUrl}all`);
  }

  // createHistory(historial: Historial): Observable<Historial> {
  //   console.log(historial);
  //   return this.http.post<Historial>(`${this.apiUrl}add`, historial);
  // }

}
