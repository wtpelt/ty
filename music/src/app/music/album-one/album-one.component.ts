import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-one',
    templateUrl: './album-one.component.html',
    standalone: false
})
export class AlbumOneComponent {
  constructor() {}
  title = 'ReGen Deep Ambient Remixes';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
