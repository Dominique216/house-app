import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pills',
  templateUrl: './pills.component.html',
  styleUrls: ['./pills.component.css']
})
export class PillsComponent implements OnInit {

  @Input()
  number!: number;
  @Input()
  icon!: string;
  @Input()
  text!: string;
  @Input()
  backgroundColor!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
