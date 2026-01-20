import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { User } from '../../types/User';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  // inject the http client
  private baseUrl = "https://localhost:5001/api";

  private httpClient = inject(HttpClient);

  currentUser = signal<User | null>(null);

  login(creds: any) {
    return this.httpClient.post<User>(`${this.baseUrl}/account/login`, creds).pipe(
      tap(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser.set(user);
      })
    );
  }
}
