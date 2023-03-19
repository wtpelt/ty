import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
  selector: 'app-album-five',
  templateUrl: './album-five.component.html',
  styleUrls: ['./album-five.component.scss']
})
export class AlbumFiveComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  title = 'Dreamstep Lovescape';
  otherPlatformsButtonText = otherPlatformsButtonText;
}
