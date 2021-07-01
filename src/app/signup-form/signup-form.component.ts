import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  
  switchForm:boolean = false;
  signOrLog?:string = "";

  constructor() { }

  ngOnInit(): void {
  }

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
