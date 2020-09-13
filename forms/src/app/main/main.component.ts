import { Component, OnInit } from '@angular/core';
import { User } from './../user';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  topics = ['Angular', 'React', 'Vue'];
  public hasError = true;
  userModel: User = new User('name', 'example@xyz.com', 8976543212, 'I am interested in', 'morning', false);
  constructor() { }

  ngOnInit(): void {
  }


  validateTopic(value) {
  	this.hasError = (value === "I am interested in");  }

}
// touched, pristine, valid, dirty, untouched, invalid