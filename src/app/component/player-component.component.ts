import { Component, Input } from '@angular/core';
import { Card } from '../models';

@Component({
  selector: 'app-player-component',
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.css']
})
export class PlayerComponentComponent {
  @Input() 
  name = "Fred"
  
  @Input() 
  hand: Card[] = []
}
