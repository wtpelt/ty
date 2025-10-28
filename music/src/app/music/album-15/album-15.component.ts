import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
    selector: 'app-album-15',
    templateUrl: './album-15.component.html',
    styleUrls: ['./album-15.component.scss'],
    standalone: true,
})
export class Album15Component {
  constructor() {}
  title = 'Eta Carinae Reborn in a Nebula';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
