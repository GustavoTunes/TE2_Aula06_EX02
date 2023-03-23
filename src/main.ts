import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TempComponent } from './temp/temp.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TempComponent],
  template: `
    <app-temp></app-temp>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
