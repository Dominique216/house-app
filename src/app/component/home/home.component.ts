import { Component, OnInit, Output } from '@angular/core';
import {HOUSES} from '../../fake-houses';
import {House} from '../../House'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  houses: House[] = HOUSES;

  constructor() { }

  ngOnInit(): void {
  }

}
