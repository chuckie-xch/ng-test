import { Component, OnInit } from '@angular/core';
import { AdItem } from '../../domain/ad-item';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {

  ads: AdItem[];

  constructor(
    private adService: AdService
  ) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
