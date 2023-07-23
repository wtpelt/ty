import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { otherPlatformsButtonText } from '../shared/button-label';

@Component({
  selector: 'app-latest-music',
  templateUrl: './latest-music.component.html',
  styleUrls: ['./latest-music.component.scss'],
})
export class LatestMusicComponent {
  title = 'home';
  otherPlatformsButtonText = otherPlatformsButtonText;

  constructor() {}
}
