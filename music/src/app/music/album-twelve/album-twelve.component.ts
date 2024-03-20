import { Component } from '@angular/core';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
  selector: 'app-album-twelve',
  templateUrl: './album-twelve.component.html',
  styleUrls: ['./album-twelve.component.scss'],
})
export class AlbumTwelveComponent {
  constructor() {}
  title = 'Lily Pad Lullaby (Sweet Dreams Mix)';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
