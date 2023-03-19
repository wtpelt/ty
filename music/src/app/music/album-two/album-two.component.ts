import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
  selector: 'app-album-two',
  templateUrl: './album-two.component.html',
  // styleUrls: ['./music.component.scss']
})
export class AlbumTwoComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  title = 'ReGen: Ambient Meditations';
  otherPlatformsButtonText = otherPlatformsButtonText;

}
