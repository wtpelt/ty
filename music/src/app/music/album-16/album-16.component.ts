import { Component } from '@angular/core';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-16',
    templateUrl: './album-16.component.html',
    styleUrls: ['./album-16.component.scss'],
    standalone: false
})
export class Album16Component {
  constructor() {}
  title = 'Organic Intelligence Regenerated';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
