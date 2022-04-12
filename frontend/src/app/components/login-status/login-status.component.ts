import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated: boolean = false;
  userFullName: string;

  storage: Storage = sessionStorage;

  constructor(private oktaAuthService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }

  ngOnInit(): void {

    //Subscribe to authentication state changes
    this.oktaAuthService.authState$.subscribe(
      (result) => {
        this.isAuthenticated = result.isAuthenticated;
        this.getUserDetails();
      }
    )
  }
  getUserDetails() {
    
    if(this.isAuthenticated) {
      //fetch the logged in user details (user claims)

      //user full name is exposed as a property name
      this.oktaAuth.getUser().then(
        (res) => {

          this.userFullName = res.name;
          
          //retrieve the user's email from authentication response
          const theEmail = res.email;
          const theGroups = res['groups'];

          //now store the email in browser storage
          this.storage.setItem('userEmail', JSON.stringify(theEmail));
          this.storage.setItem('isAdmin', theGroups.contains("Admin"));

          console.log(res);
        }
      );
    }
  }

  logout() {
    //terminates the session with Okta and removes current tokens
    this.oktaAuth.signOut();
    this.storage.clear();
  }
}
