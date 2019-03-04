import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ToggleSocial() {
    if (window.innerWidth < 600) {
      var x = document.getElementById("nav-social");
      var y = document.getElementById("menu-bars-social");
      x.classList.toggle("nav-expand");
      y.classList.toggle("change");
    }
  }

}
