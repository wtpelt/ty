import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-one',
  templateUrl: './album-one.component.html',
  // styleUrls: ['./music.component.scss']
})
export class AlbumOneComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  title = 'ReGen Deep Ambient Remixes';
}
