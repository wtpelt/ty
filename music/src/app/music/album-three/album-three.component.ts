import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-three',
  templateUrl: './album-three.component.html',
  // styleUrls: ['./music.component.scss']
})
export class AlbumThreeComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  title = 'Tylepathy Remixes - One With Nature';
}

