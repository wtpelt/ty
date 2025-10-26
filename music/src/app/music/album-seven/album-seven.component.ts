import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-seven',
    templateUrl: './album-seven.component.html',
    styleUrls: ['./album-seven.component.scss'],
    standalone: false
})
export class AlbumSevenComponent {
  constructor() {}
  title = 'Lily Pad Lullaby Symphony';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
