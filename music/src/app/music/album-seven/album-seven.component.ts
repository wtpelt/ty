import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-seven',
  templateUrl: './album-seven.component.html',
  styleUrls: ['./album-seven.component.scss']
})
export class AlbumSevenComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  title = 'Lily Pad Lullaby Symphony';
}
