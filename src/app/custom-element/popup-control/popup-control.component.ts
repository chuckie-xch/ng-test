import { Component, OnInit, Injector } from '@angular/core';
import { PopupService } from '../popup.service';
import { PopupComponent } from '../popup/popup.component';
// import { createNgElementConstructor } from '../elements-dist';


@Component({
  selector: 'app-popup-control',
  templateUrl: './popup-control.component.html',
  styleUrls: ['./popup-control.component.css']
})
export class PopupControlComponent implements OnInit {



  constructor(
    private injector: Injector,
    public popup: PopupService
  ) {
    // const popupElement = createNgElementConstructor(PopupComponent, {injector: this.injector});
    // customElements.define('popup-element', popupElement);
  }

  ngOnInit() {
  }

}
