import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-nine',
    templateUrl: './album-nine.component.html',
    styleUrls: ['./album-nine.component.scss'],
    standalone: true,
})
export class AlbumNineComponent {
  constructor() {}
  title = 'Mycelium is Remixed';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
