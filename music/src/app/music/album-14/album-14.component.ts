import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-14',
    templateUrl: './album-14.component.html',
    styleUrls: ['./album-14.component.scss'],
    standalone: true,
})
export class Album14Component {
  constructor() {}
  title = 'Forest Guardians Remixed';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
