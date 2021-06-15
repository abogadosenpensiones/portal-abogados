import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-v3',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  classname = "footer-area gray-bg pt-90";
  ftbgimage = "";
  ftlogo = "assets/images/logo-2.1.png";
  ftshape = "d-none";

  ngOnInit(): void {
  }

}
