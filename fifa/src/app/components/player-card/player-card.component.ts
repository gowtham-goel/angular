import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  imgUrl = './assets/player-images/ronaldo.png';
  name = 'Ronaldo';

  constructor() { }

  ngOnInit(): void {
  }

}
