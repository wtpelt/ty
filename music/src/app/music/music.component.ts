import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  // styleUrls: ['./music.component.scss']
})
export class MusicComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  title = 'music';

}
