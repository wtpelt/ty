import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-eleven',
    templateUrl: './album-eleven.component.html',
    styleUrls: ['./album-eleven.component.scss'],
    standalone: false
})
export class AlbumElevenComponent {
  constructor() {}
  title = 'Fragrance Regenerated';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
