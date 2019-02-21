import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-assignment-three';
  displayDetails = false;
  details = [];

  onClickDisplay() {
    this.displayDetails = !this.displayDetails;
    this.details.push({ date: new Date(), count: this.details.length + 1 });
  }
}
