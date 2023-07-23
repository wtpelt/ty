import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
  selector: 'app-album-four',
  templateUrl: './album-four.component.html',
  styleUrls: ['./album-four.component.scss'],
})
export class AlbumFourComponent {
  constructor() {}
  title = 'Dreamstep Lovescape';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
