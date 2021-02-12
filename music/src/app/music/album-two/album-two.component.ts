import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-two',
  templateUrl: './album-two.component.html',
  // styleUrls: ['./music.component.scss']
})
export class AlbumTwoComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  title = 'ReGen: Ambient Meditations';
}
