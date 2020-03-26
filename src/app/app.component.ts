import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userObject:{firstName:string, lastName:string}

  constructor(){
    this.userObject = {
      firstName : "Nilkanth",
      lastName : "shirodkar"
    }
  }

  changeValue(){

    this.userObject.firstName = "Hello";

  }

  changeObject(){

    this.userObject = {
      firstName : "Test",
      lastName : "world"
    }
  }

}
