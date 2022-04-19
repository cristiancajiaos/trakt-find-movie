import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl = environment.baseUrl;
  clientId = environment.clientId;

  defaultHeaders = {
    "Content-Type": "application/json",
    "trakt-api-version":2
  };

  constructor(
    private http: HttpClient
  ) { }

  searchMovieByQuery(query: string): Observable<any> {
    const url = `${this.baseUrl}/search/movie?query=${query}`;
    return this.http.get<any>(url, {
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key':this.clientId
      },
    });
  }
}
