import { Component, Output } from '@angular/core';
import { Card, DeckOfCards } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-deck-of-cards',
  templateUrl: './deck-of-cards.component.html',
  styleUrls: ['./deck-of-cards.component.css']
})
export class DeckOfCardsComponent {
  
  @Output() 
  onCardSelection = new Subject<Card | undefined>()

  cards: DeckOfCards

  constructor() {
    this.cards = new DeckOfCards()
    this.cards.shuffle()
  }

  drawCard() {
    const c = this.cards.drawCard()
    console.info(">>>> taken: ", c)
    this.onCardSelection.next(c)
  }
}
