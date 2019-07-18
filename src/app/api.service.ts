import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<any> {
    return this.httpClient.get(
      'https://www.reddit.com/r/Showerthoughts/top.json?sort=new'
    );
  }
}
