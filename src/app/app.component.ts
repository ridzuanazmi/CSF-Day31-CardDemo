import { Component } from '@angular/core';
import { Card } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day-31Workshop';

  players = ["Fred"]

  playerHand: Card[] = []

  newCard(card: Card | undefined) {
    console.info(card)
    // @ts-ignore
    this.playerHand.push(card)
  }
}
