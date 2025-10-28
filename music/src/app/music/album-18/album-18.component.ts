import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-18',
    templateUrl: './album-18.component.html',
    styleUrls: ['./album-18.component.scss'],
    standalone: true,
})
export class Album18Component {
  constructor() {}
  title = 'Cesty Snu';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
