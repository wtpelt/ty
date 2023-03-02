import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent {
  albumOne = "/music/regen-deep-ambient-remixes";
  albumTwo = "/music/regen-ambient-meditations";
  albumThree = "/music/tylepathy-remixes-one-with-nature";
  albumFour = "/music/dreamstep-lovescape";
  albumFive = "/music/one-giant-consciousness";
  albumSix = "/music/afar-tylepathy-remixes";
  albumSeven = "/music/lily-pad-lullaby-symphony";
  albumEight = "/music/breath-portal-to-stillness";
  albumNine = "/music/the-mycelium-is-remixed";
  albumTen = "/music/dreamstep-lovescape-suspended-reverb-mix";

  constructor(private router: Router, private route: ActivatedRoute) {}

  title = 'music';

}
