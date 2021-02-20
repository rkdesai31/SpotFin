import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedIn: boolean;
  constructor(private accountsService: AccountsService) {

  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.model);
    this.accountsService.login(this.model).subscribe(response => {
      this.loggedIn = true;
    }, error => {
      console.log(error);
    }
    );
  }

}
