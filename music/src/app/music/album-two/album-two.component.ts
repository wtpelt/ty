import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
  selector: 'app-album-two',
  templateUrl: './album-two.component.html',
})
export class AlbumTwoComponent {
  constructor() {}
  title = 'ReGen: Ambient Meditations';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
