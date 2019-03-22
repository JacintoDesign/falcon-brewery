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

  hideCard1() {
    let card = document.getElementById("card-1");
    card.classList.add("no-show")
  }

  hideCard2() {
    let card = document.getElementById("card-2");
    card.classList.add("no-show")
  }

  hideCard3() {
    let card = document.getElementById("card-3");
    card.classList.add("no-show")
  }

  hideCard4() {
    let card = document.getElementById("card-4");
    card.classList.add("no-show")
  }

  showCard1() {
    let card = document.getElementById("card-1");
    card.classList.remove("no-show");
    this.hideCard2();
    this.hideCard3();
    this.hideCard4();
  }

  showCard2() {
    let card = document.getElementById("card-2");
    card.classList.remove("no-show");
    this.hideCard1();
    this.hideCard3();
    this.hideCard4();
  }

  showCard3() {
    let card = document.getElementById("card-3");
    card.classList.remove("no-show");
    this.hideCard1();
    this.hideCard2();
    this.hideCard4();
  }

  showCard4() {
    let card = document.getElementById("card-4");
    card.classList.remove("no-show");
    this.hideCard1();
    this.hideCard2();
    this.hideCard3();
  }

}
