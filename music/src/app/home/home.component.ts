import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { otherPlatformsButtonText } from '../shared/button-label';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
})
export class HomeComponent {
  title = 'home';
  showSection = false;
  otherPlatformsButtonText = otherPlatformsButtonText;
}
