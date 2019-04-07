import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Toggle() {
    if (window.innerWidth < 1025) {
      var x = document.getElementById("nav");
      var y = document.getElementById("menu-bars");
      var z = document.getElementById("nav-top")
      x.classList.toggle("nav-expand");
      y.classList.toggle("change");
      z.classList.toggle("display-none");
    }
  }

}
