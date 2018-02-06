import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() { }

  startDebugging(event: any): void {
    debugger;
    const _this = this;
    console.log('stared debugging!');
  }
}
