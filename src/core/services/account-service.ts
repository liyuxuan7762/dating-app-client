import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  // inject the http client
  private baseUrl = "https://localhost:5001/api";

  private httpClient = inject(HttpClient);

  login(creds: any) {
    return this.httpClient.post(`${this.baseUrl}/account/login`, creds);
  }
}
