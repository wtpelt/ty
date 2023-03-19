import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
  selector: 'app-album-six',
  templateUrl: './album-six.component.html',
  styleUrls: ['./album-six.component.scss']
})
export class AlbumSixComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  title = 'Afar (Tylepathy Remixes)';
  otherPlatformsButtonText = otherPlatformsButtonText;

}
