import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeckOfCardsComponent } from './component/deck-of-cards.component';
import { PlayerComponentComponent } from './component/player-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckOfCardsComponent,
    PlayerComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
