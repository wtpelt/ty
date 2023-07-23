import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  myUrl: any;
  title: string;
  albumOne = '/music/regen-deep-ambient-remixes';
  albumTwo = '/music/regen-ambient-meditations';
  albumThree = '/music/tylepathy-remixes-one-with-nature';
  albumFour = '/music/dreamstep-lovescape';
  albumFive = '/music/one-giant-consciousness';
  albumSix = '/music/afar-tylepathy-remixes';
  albumSeven = '/music/lily-pad-lullaby-symphony';
  albumEight = '/music/breath-portal-to-stillness';
  albumNine = '/music/the-mycelium-is-remixed';
  albumTen = '/music/dreamstep-lovescape-suspended-reverb-mix';
  albumEleven = '/music/fragrance-regenerated';

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.myUrl = event;
        if (this.myUrl.url === '/music') {
          this.title = 'Music';
        } else if (
          this.myUrl.url === this.albumOne ||
          this.myUrl.url === this.albumTwo ||
          this.myUrl.url === this.albumThree ||
          this.myUrl.url === this.albumFour ||
          this.myUrl.url === this.albumFive ||
          this.myUrl.url === this.albumSix ||
          this.myUrl.url === this.albumSeven ||
          this.myUrl.url === this.albumEight ||
          this.myUrl.url === this.albumNine ||
          this.myUrl.url === this.albumTen ||
          this.myUrl.url === this.albumEleven
        ) {
          this.title = 'Music';
        } else if (this.myUrl.url === '/about') {
          this.title = 'About';
        } else if (this.myUrl.url === '/') {
          this.title = 'Home';
        } else {
          this.title = '';
        }
      });
  }
}
