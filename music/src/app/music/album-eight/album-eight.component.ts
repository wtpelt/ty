import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-eight',
    templateUrl: './album-eight.component.html',
    styleUrls: ['./album-eight.component.scss'],
    standalone: false
})
export class AlbumEightComponent {
  constructor() {}
  title = 'Breath: Portal to Stillness';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
