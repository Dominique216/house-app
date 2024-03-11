import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { windowWhen } from 'rxjs';
import { ADMINUSERS } from 'src/app/data/admin-users';
import { Admin } from 'src/app/interfaces/Admin';
import { DataSharingService } from 'src/app/service/data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f')
  login!: NgForm;

  users: Admin[] = ADMINUSERS;

  constructor(private router: Router, private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    let auth: boolean[] = [];
    this.users.forEach(u => {
      if(this.login.value.email === u.email && this.login.value.password == u.password){
        auth.push(true)
      } else {
        auth.push(false)
      }
    })

    if(auth.includes(true)){
      this.dataSharingService.isUserLoggedIn.next(true);
      this.router.navigate(['/'])
    } else {
      alert("Wrong credentials")
    }
  }
}
