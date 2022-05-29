import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-eight',
  templateUrl: './album-eight.component.html',
  styleUrls: ['./album-eight.component.scss']
})
export class AlbumEightComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  title = 'Breath: Portal to Stillness';
}
