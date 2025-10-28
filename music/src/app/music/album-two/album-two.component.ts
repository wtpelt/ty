import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-two',
    templateUrl: './album-two.component.html',
    standalone: true,
})
export class AlbumTwoComponent {
  constructor() {}
  title = 'ReGen: Ambient Meditations';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
