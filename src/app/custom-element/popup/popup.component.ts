import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  host:{
    ['@state']: 'state',
    '(@state.done)': 'onAnimationDone($event)'
  },
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ])
  ]
})
export class PopupComponent implements OnInit {

  private state: 'opened' | 'closed' = 'closed';
  _message: string;

  @Output() closed = new EventEmitter();

  @Input()
  set message(message: string) {
    this._message = message;
    this.state = 'opened';
    setTimeout(() => {
      this.state = 'closed';
    }, 2000);
  }

  get message(): string {
    return this._message;
  }

  constructor() { }

  ngOnInit() {
  }

  onAnimationDone(e: AnimationEvent) {
    if (e.toState === 'closed') {
      this.closed.next();
    }
  }

}
