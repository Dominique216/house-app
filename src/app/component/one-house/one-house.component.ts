import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HOUSES } from 'src/app/data/fake-houses';
import { House } from 'src/app/interfaces/House';
import { customFunctions } from '../../functions'

@Component({
  selector: 'app-one-house',
  templateUrl: './one-house.component.html',
  styleUrls: ['./one-house.component.css']
})
export class OneHouseComponent implements OnInit {

  public id!: string;
  house!: House;
  houses: House[] = HOUSES;
  formattedPrice: string = ''
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id  = this.route.snapshot.paramMap.get('id')
    if(id !== null) {
      this.id = id
    }
    this.findHouse();

    this.formattedPrice = customFunctions.formatPrice(this.house.price)

  }

  findHouse = () => {
    this.houses.forEach(h => {
      let hIdString = String(h.id)
      if(hIdString == this.id){
        this.house = h
      }
    })
  }
}
