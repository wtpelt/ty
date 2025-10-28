import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-five',
    templateUrl: './album-five.component.html',
    styleUrls: ['./album-five.component.scss'],
    standalone: true,
})
export class AlbumFiveComponent {
  constructor() {}
  title = 'Dreamstep Lovescape';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
