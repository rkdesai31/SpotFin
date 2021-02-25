import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { error } from 'protractor';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //@Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountsService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => { console.log(error); });
  }

  cancel() {
    //console.log('cancelled');
    this.cancelRegister.emit(false);
  }

}
