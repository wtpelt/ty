import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
  selector: 'app-album-eight',
  templateUrl: './album-eight.component.html',
  styleUrls: ['./album-eight.component.scss']
})
export class AlbumEightComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  title = 'Breath: Portal to Stillness';
  otherPlatformsButtonText = otherPlatformsButtonText;

}
