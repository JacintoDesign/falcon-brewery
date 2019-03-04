import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ToggleContact() {
    if (window.innerWidth < 600) {
      var x = document.getElementById("nav-contact");
      var y = document.getElementById("menu-bars-contact");
      x.classList.toggle("nav-expand");
      y.classList.toggle("change");
    }
  }
}
