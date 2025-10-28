import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-eight',
    templateUrl: './album-eight.component.html',
    styleUrls: ['./album-eight.component.scss'],
    standalone: true,
})
export class AlbumEightComponent {
  constructor() {}
  title = 'Breath: Portal to Stillness';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
