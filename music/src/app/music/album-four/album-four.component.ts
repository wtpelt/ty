import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-four',
  templateUrl: './album-four.component.html',
  // styleUrls: ['./music.component.scss']
})
export class AlbumFourComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  title = 'Dreamstep Lovescape';
}

