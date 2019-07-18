import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '922dd7a3ad534c4799afd52d974b02bb';

  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient.get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${
        this.API_KEY
      }`
    );
  }
}
