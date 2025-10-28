import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [RouterModule]
})
export class HeaderComponent implements OnInit {
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
  albumTwelve = '/music/lily-pad-lullaby-sweet-dreams-mix';
  album13 = '/music/ripples-through-time';
  album14 = '/music/forest-guardians-remixed';
  album15 = '/music/eta-carinae-reborn-in-a-nebula';
  album16 = '/music/organic-intelligence-regenerated';
  album17 = '/music/ripples-through-time-haquin-revibe';
  album18 = '/music/cesty-snu';

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
          this.myUrl.url === this.albumEleven ||
          this.myUrl.url === this.albumTwelve ||
          this.myUrl.url === this.album13 ||
          this.myUrl.url === this.album14 ||
          this.myUrl.url === this.album15 ||
          this.myUrl.url === this.album16 ||
          this.myUrl.url === this.album17 ||
          this.myUrl.url === this.album18
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
