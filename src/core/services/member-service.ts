import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Member, Photo } from '../../types/member';
import { AccountService } from './account-service';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private httpClient = inject(HttpClient);
  private accountService = inject(AccountService);

  private apiUrl = environment.apiUrl;

  getMembers() {
    return this.httpClient.get<Member[]>(this.apiUrl + '/members', this.getHttpOptions());
  }

  getMemberById(id: string) {
    return this.httpClient.get<Member>(this.apiUrl + '/members/' + id, this.getHttpOptions());
  }

  getPhotosForMember(id: string) {
    return this.httpClient.get<Photo[]>(
      this.apiUrl + '/members/' + id + '/photos',
      this.getHttpOptions(),
    );
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.accountService.currentUser()?.token,
      }),
    };
  }
}
