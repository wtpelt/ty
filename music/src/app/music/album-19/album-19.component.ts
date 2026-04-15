import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-19',
    templateUrl: './album-19.component.html',
    styleUrls: ['./album-19.component.scss'],
    standalone: true,
})
export class Album19Component {
  constructor() {}
  title = 'Embers of a Forgotten Prayer Revibed';
  otherPlatformsButtonText = otherPlatformsButtonText;
}


