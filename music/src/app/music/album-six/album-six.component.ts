import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-six',
    templateUrl: './album-six.component.html',
    styleUrls: ['./album-six.component.scss'],
    standalone: true,
})
export class AlbumSixComponent {
  constructor() {}
  title = 'Afar (Tylepathy Remixes)';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
