import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-five',
    templateUrl: './album-five.component.html',
    styleUrls: ['./album-five.component.scss'],
    standalone: false
})
export class AlbumFiveComponent {
  constructor() {}
  title = 'Dreamstep Lovescape';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
