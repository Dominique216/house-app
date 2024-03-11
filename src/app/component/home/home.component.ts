import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HOUSES} from '../../data/fake-houses';
import {House} from '../../interfaces/House'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  houses: House[] = HOUSES;
  isLoggedIdParam: string = "";
  isLoggedIn: boolean = false

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let loggedInParam = this.route.snapshot.paramMap.get("isLoggedIn")
    if(loggedInParam == "true"){
      this.isLoggedIn == true
    }
  }

}
