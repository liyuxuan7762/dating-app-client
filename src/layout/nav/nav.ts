/*
 * @Author: Leo lyx776239423@gmail.com
 * @Date: 2026-01-20 12:14:36
 * @LastEditors: Leo lyx776239423@gmail.com
 * @LastEditTime: 2026-01-20 16:45:36
 * @FilePath: \dating-app-client\src\layout\nav\nav.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  
  protected creds: any = {};

  protected isLoggedIn = signal(false);

  protected accountService = inject(AccountService);

  login() {
    this.accountService.login(this.creds).subscribe({
      next: (resp) => {
        console.log('login successful', resp);
        this.isLoggedIn.set(true);
        this.creds = {};
      },
      error: (err) => alert('login failed: ' + err.message)
    })
  }
   logout() {
    this.isLoggedIn.set(false);
  }

}
