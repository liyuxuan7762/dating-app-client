import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {

  private httpClient = inject(HttpClient);
  protected members = signal<any>([]);
  protected title = 'client';

  ngOnInit(): void {
    this.httpClient.get('https://localhost:5001/api/Members').subscribe({
      next: resp => this.members.set(resp),
      error: err => console.log(err),
      complete: () => console.log('Http Request Completed')
    });
  }
}
