import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  date;
  constructor() { }

  ngOnInit() {
  }

  register(values){
    console.log(values.value);
  }

}
