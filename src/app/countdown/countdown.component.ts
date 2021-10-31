import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  public minutes = null;
  public seconds = null;

  private timeLeft = 600;
  private interval;

  constructor() {
  }

  ngOnInit(): void {
    this.startTimer();
  }

  private startTimer(): void {
    // this.ngZone.runOutsideAngular(() => {}  - в ngZone не получилось вынести счетчик,
    // не понял пока как оттуда переменные сделать доступными для шаблона

      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.timeLeft = 0;
        }

        const seconds = (this.timeLeft % 60).toString();
        this.seconds = seconds.length < 2 ? '0' + seconds : seconds;
        this.minutes = Math.floor((this.timeLeft / 60) * 1);
      }, 1000);
  }

}
