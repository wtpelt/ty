import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-17',
    templateUrl: './album-17.component.html',
    styleUrls: ['./album-17.component.scss'],
    standalone: true,
})
export class Album17Component {
  constructor() {}
  title = 'Organic Intelligence Regenerated';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
