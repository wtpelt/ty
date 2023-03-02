import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  myUrl: any;
  title: string;
  albumOne = "/music/regen-deep-ambient-remixes";
  albumTwo = "/music/regen-ambient-meditations";
  albumThree = "/music/tylepathy-remixes-one-with-nature";
  albumFour = "/music/dreamstep-lovescape";
  albumFive = "/music/one-giant-consciousness";
  albumSix = "/music/afar-tylepathy-remixes";
  albumSeven = "/music/lilypad-lullaby-symphony";
  albumEight = "/music/breath-portal-to-stillness";
  albumNine = "/music/the-mycelium-is-remixed";
  albumTen = "/music/dreamstep-lovescape-suspended-reverb-mix";


  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  )
      .subscribe(event => {
          this.myUrl = event;
          if (this.myUrl.url === '/music') {
            this.title = 'Music';
          } else if (
            this.myUrl.url === this.albumOne ||
            this.albumTwo ||
            this.albumThree ||
            this.albumFour ||
            this.albumFive ||
            this.albumSix ||
            this.albumSeven ||
            this.albumEight ||
            this.albumNine ||
            this.albumTen
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
