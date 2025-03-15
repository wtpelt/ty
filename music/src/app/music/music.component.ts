import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { otherPlatformsButtonText } from '../shared/button-label';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent {
  bgImg: string;
  bgPosition: string;

  albumOne = '/music/regen-deep-ambient-remixes';
  albumTwo = '/music/regen-ambient-meditations';
  albumThree = '/music/tylepathy-remixes-one-with-nature';
  albumFour = '/music/dreamstep-lovescape';
  albumFive = '/music/one-giant-consciousness';
  albumSix = '/music/afar-tylepathy-remixes';
  albumSeven = '/music/lily-pad-lullaby-symphony';
  albumEight = '/music/breath-portal-to-stillness';
  albumNine = '/music/the-mycelium-is-remixed';
  albumTen = '/music/dreamstep-lovescape-suspended-reverb-mix';
  albumEleven = '/music/fragrance-regenerated';
  albumTwelve = '/music/lily-pad-lullaby-sweet-dreams-mix';
  album13 = '/music/ripples-through-time';
  album14 = '/music/forest-guardians-remixed';
  album15 = '/music/eta-carinae-reborn-in-a-nebula';
  album16 = '/music/organic-intelligence-regenerated';

  constructor(private route: ActivatedRoute) {}

  title = 'music';
  otherPlatformsButtonText = otherPlatformsButtonText;

  ngOnInit(): void {
    const routeData = this.route.snapshot.data;

    this.bgImg = routeData.bgImg;
    this.bgPosition = routeData.bgPosition;
  }
}
