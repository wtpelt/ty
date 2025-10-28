import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { otherPlatformsButtonText } from '../shared/button-label';

@Component({
    selector: 'app-latest-music',
    templateUrl: './latest-music.component.html',
    styleUrls: ['./latest-music.component.scss'],
    standalone: true,
})
export class LatestMusicComponent {
  title = 'Featured Music';
  otherPlatformsButtonText = otherPlatformsButtonText;

  constructor() {}
}
