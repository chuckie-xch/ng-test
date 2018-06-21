import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unless-control',
  templateUrl: './unless-control.component.html',
  styleUrls: ['./unless-control.component.css']
})
export class UnlessControlComponent implements OnInit {

  condition: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
