import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { LoginCreds } from '../../types/user';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected creds = {} as LoginCreds;

  protected accountService = inject(AccountService);
  private router = inject(Router);

  login() {
    this.accountService.login(this.creds).subscribe({
      next: (resp) => {
        console.log('login successful', resp);
        this.creds = {} as LoginCreds; // clear the form
        this.router.navigateByUrl('/members');
      },
      error: (err) => alert('login failed: ' + err.message),
    });
  }
  logout() {
    this.accountService.logout();
  }
}
