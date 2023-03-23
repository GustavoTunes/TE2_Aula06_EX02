import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  standalone: true,
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css'],
})
export class TempComponent implements OnInit {
  segundo: number = 0;
  minuto: number = 0;
  intervalo;

  startTimer() {
    this.intervalo = setInterval(() => {
      this.segundo++;
      if (this.segundo == 60) {
        this.segundo = 0;
        this.minuto++;
      }
    }, 100);
  }

  pauseTimer() {
    clearInterval(this.intervalo);
  }

  parar() {
    clearInterval(this.intervalo);
    this.segundo = 0;
    this.minuto = 0;
  }

  constructor() {}

  ngOnInit() {}
}
