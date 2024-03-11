import { Component, ComponentFactoryResolver, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from 'src/app/service/data-sharing.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isUserLoggedIn!: boolean;

  constructor(private dataSharingService: DataSharingService) { 
    this.dataSharingService.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    })
  }

  ngOnInit(): void {
    
  }


  logout(): void {
    localStorage.clear();
    location.reload();
  }
}
