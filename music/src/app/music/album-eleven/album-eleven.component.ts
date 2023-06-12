import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
  selector: 'app-album-eleven',
  templateUrl: './album-eleven.component.html',
  styleUrls: ['./album-eleven.component.scss']
})
export class AlbumElevenComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  title = 'Fragrance Regenerated';
  otherPlatformsButtonText = otherPlatformsButtonText;

}
