/*
 * @Author: Leo lyx776239423@gmail.com
 * @Date: 2026-01-21 14:05:41
 * @LastEditors: Leo lyx776239423@gmail.com
 * @LastEditTime: 2026-01-21 14:37:26
 * @FilePath: \dating-app-client\src\core\services\account-service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { LoginCreds, RegisterCreds, User } from '../../types/user';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  // inject the http client
  private baseUrl = 'https://localhost:5001/api';

  private httpClient = inject(HttpClient);

  currentUser = signal<User | null>(null);

  login(creds: LoginCreds) {
    return this.httpClient.post<User>(`${this.baseUrl}/account/login`, creds).pipe(
      tap((user) => {
        this.setCurrentUser(user);
      })
    );
  }

  register(creds: RegisterCreds) {
    return this.httpClient.post<User>(`${this.baseUrl}/account/register`, creds).pipe(
      tap((user) => {
        this.setCurrentUser(user);
      })
    );
  }

  setCurrentUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser.set(user);
  }

  logout() {
    this.currentUser.set(null);
    localStorage.removeItem('user');
  }
}
