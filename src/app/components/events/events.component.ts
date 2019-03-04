import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ToggleEvents() {
    if (window.innerWidth < 600) {
      var x = document.getElementById("nav-events");
      var y = document.getElementById("menu-bars-events");
      x.classList.toggle("nav-expand");
      y.classList.toggle("change");
    }
  }
}
