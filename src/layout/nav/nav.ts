import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { signal } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

  protected creds: any = {};


  protected accountService = inject(AccountService);

  login() {
    this.accountService.login(this.creds).subscribe({
      next: (resp) => {
        console.log('login successful', resp);
        this.creds = {};
      },
      error: (err) => alert('login failed: ' + err.message)
    })
  }
   logout() {
    this.accountService.logout();
  }

}
