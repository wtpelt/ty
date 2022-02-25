import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-six',
  templateUrl: './album-six.component.html',
  styleUrls: ['./album-six.component.scss']
})
export class AlbumSixComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  title = 'Afar (Tylepathy Remixes)';
}
