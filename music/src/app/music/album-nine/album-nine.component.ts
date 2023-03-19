import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { otherPlatformsButtonText } from 'src/app/shared/button-label';

@Component({
  selector: 'app-album-nine',
  templateUrl: './album-nine.component.html',
  styleUrls: ['./album-nine.component.scss']
})
export class AlbumNineComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  title = 'Mycelium is Remixed';
  otherPlatformsButtonText = otherPlatformsButtonText;

}
