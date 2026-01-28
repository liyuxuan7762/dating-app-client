import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  imports: [],
  templateUrl: './test-errors.html',
  styleUrl: './test-errors.css',
})
export class TestErrors {
  private httpClient = inject(HttpClient);

  private baseURL: string = 'https://localhost:5001/api/';

  protected modalStateErrors = signal<string[]>([]);
  get404Error() {
    this.httpClient.get(this.baseURL + 'buggy/not-found').subscribe({
      next: (resp) => console.log(resp),
      error: (err) => console.log(err),
    });
  }

  get400ValidationError() {
    this.httpClient.post(this.baseURL + 'account/register', {}).subscribe({
      next: (resp) => console.log(resp),
      error: (error) => {
        console.log(error), this.modalStateErrors.set(error);
      },
    });
  }

  get400Error() {
    this.httpClient.get(this.baseURL + 'buggy/bad-request').subscribe({
      next: (resp) => console.log(resp),
      error: (error) => console.log(error),
    });
  }

  get401Error() {
    this.httpClient.get(this.baseURL + 'buggy/auth').subscribe({
      next: (resp) => console.log(resp),
      error: (error) => console.log(error),
    });
  }

  get500Error() {
    this.httpClient.get(this.baseURL + 'buggy/server-error').subscribe({
      next: (resp) => console.log(resp),
      error: (error) => console.log(error),
    });
  }
}
