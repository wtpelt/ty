import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-13',
    templateUrl: './album-13.component.html',
    styleUrls: ['./album-13.component.scss'],
    standalone: true,
})
export class Album13Component {
  constructor() {}
  title = 'Ripples Through Time';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
