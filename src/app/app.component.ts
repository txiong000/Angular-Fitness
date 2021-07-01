import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fitness-Tracker-Angular';
  faBars = faBars;

  switchForm:boolean = false;
  signUpLogin() {
    if(!this.switchForm)
    {
      this.switchForm = true;
    } else {
      this.switchForm = false;
    }
    console.log(this.switchForm)
  }
}
