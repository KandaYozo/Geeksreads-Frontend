import { DataSharingService } from '../nav-bar/data-sharing.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 * SignIn Service
 * @export
 * @class SignInService
 */
@Injectable({
  providedIn: 'root'
})
export class SignInService {

  /**
   * SignIn
   * @param {*} email
   * @param {*} password
   * @memberof SignInService
   */
  signIn(email, password) {
    const data = {
      UserEmail: email,
      UserPassword: password
    };
    this.http
      .post('https://geeksreads.herokuapp.com/api/auth/signin', data)
      .subscribe((serverResponse: any) => {
        console.log(serverResponse);
        this.dataSharingService.isUserLoggedIn.next(true);
        localStorage.setItem('token', serverResponse.Token);
        localStorage.setItem('userId', serverResponse.UserId);
        this.router.navigate(['/newsfeed']);
      }, (error: { json: () => void; }) => {
        console.log(error);
        alert(error['error']['ReturnMsg']);
      });
  }
  constructor(private http: HttpClient,
              private router: Router,
              private dataSharingService: DataSharingService) { }
}
