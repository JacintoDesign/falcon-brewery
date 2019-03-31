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

  toggleBeerList() {
    let beerList = document.getElementById("mobile-beer-menu");
    beerList.classList.toggle("beer-list-hide");
  }

  hideCard1() {
    let card = document.getElementById("card-1");
    card.classList.add("no-show");
  }

  hideCard2() {
    let card = document.getElementById("card-2");
    card.classList.add("no-show");
  }

  hideCard3() {
    let card = document.getElementById("card-3");
    card.classList.add("no-show");
  }

  hideCard4() {
    let card = document.getElementById("card-4");
    card.classList.add("no-show");
  }

  hideCard5() {
    let card = document.getElementById("card-5");
    card.classList.add("no-show");
  }

  hideCard6() {
    let card = document.getElementById("card-6");
    card.classList.add("no-show");
  }

  hideCard7() {
    let card = document.getElementById("card-7");
    card.classList.add("no-show");
  }

  hideCard8() {
    let card = document.getElementById("card-8");
    card.classList.add("no-show");
  }

  hideCard9() {
    let card = document.getElementById("card-9");
    card.classList.add("no-show");
  }

  showCard1() {
    let card = document.getElementById("card-1");
    card.classList.remove("no-show");
    this.hideCard2();
    this.hideCard3();
    this.hideCard4();
    this.hideCard5();
    this.hideCard6();
    this.hideCard7();
    this.hideCard8();
    this.hideCard9();
    this.toggleBeerList();
  }

  showCard2() {
    let card = document.getElementById("card-2");
    card.classList.remove("no-show");
    this.hideCard1();
    this.hideCard3();
    this.hideCard4();
    this.hideCard5();
    this.hideCard6();
    this.hideCard7();
    this.hideCard8();
    this.hideCard9();
    this.toggleBeerList();
  }

  showCard3() {
    let card = document.getElementById("card-3");
    card.classList.remove("no-show");
    this.hideCard1();
    this.hideCard2();
    this.hideCard4();
    this.hideCard5();
    this.hideCard6();
    this.hideCard7();
    this.hideCard8();
    this.hideCard9();
    this.toggleBeerList();
  }

  showCard4() {
    let card = document.getElementById("card-4");
    card.classList.remove("no-show");
    this.hideCard1();
    this.hideCard2();
    this.hideCard3();
    this.hideCard5();
    this.hideCard6();
    this.hideCard7();
    this.hideCard8();
    this.hideCard9();
    this.toggleBeerList();
  }

  showCard5() {
    let card = document.getElementById("card-5");
    card.classList.remove("no-show");
    this.hideCard1();
    this.hideCard2();
    this.hideCard3();
    this.hideCard4();
    this.hideCard6();
    this.hideCard7();
    this.hideCard8();
    this.hideCard9();
    this.toggleBeerList();
  }

  showCard6() {
    let card = document.getElementById("card-6");
    card.classList.remove("no-show");
    this.hideCard1();
    this.hideCard2();
    this.hideCard3();
    this.hideCard5();
    this.hideCard4();
    this.hideCard7();
    this.hideCard8();
    this.hideCard9();
    this.toggleBeerList();
  }

  showCard7() {
    let card = document.getElementById("card-7");
    card.classList.remove("no-show");
    this.hideCard1();
    this.hideCard2();
    this.hideCard3();
    this.hideCard5();
    this.hideCard6();
    this.hideCard4();
    this.hideCard8();
    this.hideCard9();
    this.toggleBeerList();
  }

  showCard8() {
    let card = document.getElementById("card-8");
    card.classList.remove("no-show");
    this.hideCard1();
    this.hideCard2();
    this.hideCard3();
    this.hideCard5();
    this.hideCard6();
    this.hideCard7();
    this.hideCard4();
    this.hideCard9();
    this.toggleBeerList();
  }

  showCard9() {
    let card = document.getElementById("card-9");
    card.classList.remove("no-show");
    this.hideCard1();
    this.hideCard2();
    this.hideCard3();
    this.hideCard5();
    this.hideCard6();
    this.hideCard7();
    this.hideCard4();
    this.hideCard8();
    this.toggleBeerList();
  }

}
