import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'home';
  public name: string;
  myUrl: any;
  bgImg: string;
  isHomepage: boolean;
  isMainMusicPage: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.myUrl = event;

        switch (this.myUrl.url) {
          case '/music':
            this.bgImg = 'musicBgImgAll';
            break;
          case '/music/album-one':
            this.bgImg = 'albumOneBgImg';
            break;
          case '/music/album-two':
            this.bgImg = 'albumTwoBgImg';
            break;
          case '/music/album-three':
            this.bgImg = 'albumThreeBgImg';
            break;
          case '/music/album-four':
            this.bgImg = 'albumFourBgImg';
            break;
          case '/music/album-five':
            this.bgImg = 'albumFiveBgImg';
            break;
          case '/music/album-six':
            this.bgImg = 'albumSixBgImg';
            break;
          case '/music/album-seven':
            this.bgImg = 'albumSevenBgImg';
            break;  
          case '/':
            this.bgImg = 'homeBgImg';
            break;
          case '/about':
            this.bgImg = 'albumSixBgImg';
            break;
        }

        if (this.myUrl.url === '/') {
          this.isHomepage = true;
        } else {
          this.isHomepage = false;
        }

        if (this.myUrl.url === '/music') {
          this.isMainMusicPage = true;
        } else {
          this.isMainMusicPage = false;
        }
      });
  }

  getBgImg() {
    switch (this.bgImg) {
      case 'musicBgImgAll':
        return 'music-bg-img-all';
      // Featured Release
      case 'homeBgImg':
        return 'album-six-bg-img';
      case 'albumOneBgImg':
        return 'album-one-bg-img';
      case 'albumTwoBgImg':
        return 'album-two-bg-img';
      case 'albumThreeBgImg':
        return 'album-three-bg-img';
      case 'albumFourBgImg':
        return 'album-four-bg-img';
      case 'aboutBgImgAll':
        return 'album-four-bg-img';
      case 'albumFiveBgImg':
        return 'album-five-bg-img';
      case 'albumSixBgImg':
        return 'album-six-bg-img';
      case 'albumSevenBgImg':
        return 'album-seven-bg-img';
    }
  }

  getBgPosition() {
    switch (this.bgImg) {
      case 'musicBgImgAll':
        return 'bottom';
      case 'albumOneBgImg':
        return 'center';
      case 'albumTwoBgImg':
        return 'center';
      case 'albumThreeBgImg':
        return 'center';
      case 'homeBgImg':
        return 'center';
      case 'albumFourBgImg':
        return 'top';
      case 'aboutBgImgAll':
        return 'top';
      case 'albumFiveBgImg':
        return 'center';
      case 'albumSixBgImg':
        return 'top';
      case 'albumSevenBgImg':
        return 'bottom';
    }
  }
}
