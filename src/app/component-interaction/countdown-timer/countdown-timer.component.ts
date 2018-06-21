import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy{

  intervalId = 0;
  message = '';
  seconds = 11;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at ${this.seconds} seconds`;
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        }
        this.message = `${this.seconds} seconds`;
      }
    }, 1000);
  }

}
