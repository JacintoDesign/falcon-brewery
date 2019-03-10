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
    if (window.innerWidth < 600) {
      var x = document.getElementById("nav");
      var y = document.getElementById("menu-bars");
      x.classList.toggle("nav-expand");
      y.classList.toggle("change");
    }
  }

}