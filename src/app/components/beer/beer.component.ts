import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ToggleBeer() {
    if (window.innerWidth < 600) {
      var x = document.getElementById("nav-beer");
      var y = document.getElementById("menu-bars-beer");
      x.classList.toggle("nav-expand");
      y.classList.toggle("change");
    }
  }
}
