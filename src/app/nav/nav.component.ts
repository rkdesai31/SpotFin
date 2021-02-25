import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  //loggedIn: boolean;
  //currentUser$: Observable<User>;
  constructor(public accountsService: AccountsService) {  }

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$ = this.accountsService.currentUser$;
  }

  login() {
    console.log(this.model);
    this.accountsService.login(this.model).subscribe(response => {
      //this.loggedIn = true;
    }, error => {
      console.log(error);
    }
    );
  }

  logout() {
    this.accountsService.logout();
    //this.loggedIn = false;
  }

  // getCurrentUser() {
  //   this.accountsService.currentUser$.subscribe(user => {
  //     this.loggedIn= !!user;
  //   },error => {
  //     console.log(error)
  //   });
  //}

}
