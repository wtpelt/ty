import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-three',
    templateUrl: './album-three.component.html',
    styleUrls: ['./album-three.component.scss'],
    standalone: true,
})
export class AlbumThreeComponent {
  constructor() {}
  title = 'Tylepathy Remixes - One With Nature';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
