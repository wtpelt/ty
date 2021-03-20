import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-five',
  templateUrl: './album-five.component.html',
  // styleUrls: ['./music.component.scss']
})
export class AlbumFiveComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  title = 'Dreamstep Lovescape';
}
