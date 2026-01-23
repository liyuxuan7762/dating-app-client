import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { LoginCreds } from '../../types/user';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastService } from '../../core/services/toast-service';

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
  private toast = inject(ToastService);

  login() {
    this.accountService.login(this.creds).subscribe({
      next: (resp) => {
        console.log('login successful', resp);
        this.creds = {} as LoginCreds; // clear the form
        this.router.navigateByUrl('/members');
        this.toast.success('Login successful!');
      },
      error: (err) => this.toast.error('Login failed: ' + err.error),
    });
  }
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
    this.toast.info('Logout successful!');
  }
}
