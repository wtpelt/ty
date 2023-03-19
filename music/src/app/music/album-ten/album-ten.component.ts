import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
  selector: 'app-album-ten',
  templateUrl: './album-ten.component.html',
  styleUrls: ['./album-ten.component.scss']
})
export class AlbumTenComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  title = 'Dreamstep Lovescape (Suspended Reverb Mix)';
  otherPlatformsButtonText = otherPlatformsButtonText;

}
