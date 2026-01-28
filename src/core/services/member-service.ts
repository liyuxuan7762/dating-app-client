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
    return this.httpClient.get<Member[]>(this.apiUrl + '/members');
  }

  getMemberById(id: string) {
    return this.httpClient.get<Member>(this.apiUrl + '/members/' + id);
  }

  getPhotosForMember(id: string) {
    return this.httpClient.get<Photo[]>(this.apiUrl + '/members/' + id + '/photos');
  }
}
