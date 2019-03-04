import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'falcon-brewery-pwa';

  Toggle() {
    if (window.innerWidth < 600) {
      var x = document.getElementById("nav");
      var y = document.getElementById("menu-bars");
      x.classList.toggle("nav-expand");
      y.classList.toggle("change");
    }
  }
}


