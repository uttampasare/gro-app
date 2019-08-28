import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public subject : string;
  public message : string;
  constructor() { }

  ngOnInit() {
  }

  public sendMessage(){
    console.log(this.subject + " " + this.message);
  }

}
