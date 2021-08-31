import { CardsService } from './servicios/cards.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  cards:any[] = [];

  constructor(private _CardsService: CardsService){}

  ngOnInit(): void {

    this.cards = this._CardsService.getCards();
    console.log(this.cards)

  }

}
