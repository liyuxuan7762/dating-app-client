import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Nav } from '../layout/nav/nav';
import { AccountService } from '../core/services/account-service';
import { Home } from '../features/home/home';
import { User } from '../types/user';
import { Router, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private httpClient = inject(HttpClient);
  protected members = signal<User[]>([]);
  protected title = 'client';

  // get the router
  protected router = inject(Router);

  private accountService = inject(AccountService);

  ngOnInit(): void {
    this.httpClient.get<User[]>('https://localhost:5001/api/Members').subscribe({
      next: (resp) => this.members.set(resp),
      error: (err) => console.log(err),
      complete: () => console.log('Http Request Completed'),
    });

    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }
}
