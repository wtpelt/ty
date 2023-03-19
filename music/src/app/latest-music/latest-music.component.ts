import { Component } from '@angular/core';
import { otherPlatformsButtonText } from '../shared/button-label';

@Component({
  selector: 'app-latest-music',
  templateUrl: './latest-music.component.html',
  styleUrls: ['./latest-music.component.scss']
})
export class LatestMusicComponent {
  title = 'home';
  otherPlatformsButtonText = otherPlatformsButtonText;

}
