import { Component } from '@angular/core';
import { otherPlatformsButtonText } from '../shared/button-label';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent {
  title = 'home';
  showSection = false;
  otherPlatformsButtonText = otherPlatformsButtonText;
}
