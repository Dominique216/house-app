import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { House } from '../../House';
import { customFunctions } from '../../functions'

@Component({
  selector: 'app-each-house',
  templateUrl: './each-house.component.html',
  styleUrls: ['./each-house.component.css'],
})
export class EachHouseComponent implements OnInit {
  @Input()
  house!: House;

  priceFormatted: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.priceFormatted= customFunctions.formatPrice(this.house.price)
  }

  oneHouseRedirect(id: number) {
    this.router.navigate(['/house', id])
  }

}
