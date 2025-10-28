import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-e',
    templateUrl: './album-ten.component.html',
    styleUrls: ['./album-ten.component.scss'],
    standalone: true,
})
export class AlbumTenComponent {
  constructor() {}
  title = 'Dreamstep Lovescape (Suspended Reverb Mix)';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
