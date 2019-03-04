import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ToggleAbout() {
    if (window.innerWidth < 600) {
      var x = document.getElementById("nav-about");
      var y = document.getElementById("menu-bars-about");
      x.classList.toggle("nav-expand");
      y.classList.toggle("change");
    }
  }
}
