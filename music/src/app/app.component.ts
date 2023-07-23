import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// Interface to define the structure of an image configuration
interface ImageConfig {
  imgClass: string;
  position: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'home';
  public name: string;
  bgImg: string;
  bgPosition: string;
  isHomepage: boolean;
  isMainMusicPage: boolean;
  defaultPosition: string = 'center';
  // whatever image you want to feature for the homepage
  homeBgImg: string = 'album-eight-bg-img';

  // Object to store image configuration against respective keys
  private imageConfig: { [key: string]: ImageConfig } = {
    musicBgImgAll: {
      imgClass: 'music-all-bg-img',
      position: this.defaultPosition,
    },
    albumOneBgImg: {
      imgClass: 'album-one-bg-img',
      position: this.defaultPosition,
    },
    albumTwoBgImg: {
      imgClass: 'album-two-bg-img',
      position: this.defaultPosition,
    },
    albumThreeBgImg: {
      imgClass: 'album-three-bg-img',
      position: this.defaultPosition,
    },
    albumFourBgImg: {
      imgClass: 'album-four-bg-img',
      position: 'top',
    },
    albumFiveBgImg: {
      imgClass: 'album-five-bg-img',
      position: this.defaultPosition,
    },
    albumSixBgImg: {
      imgClass: 'album-six-bg-img',
      position: 'top',
    },
    albumSevenBgImg: {
      imgClass: 'album-seven-bg-img',
      position: 'bottom',
    },
    albumEightBgImg: {
      imgClass: 'album-eight-bg-img',
      position: 'top',
    },
    albumNineBgImg: {
      imgClass: 'album-nine-bg-img',
      position: this.defaultPosition,
    },
    albumTenBgImg: {
      imgClass: 'album-ten-bg-img',
      position: this.defaultPosition,
    },
    albumElevenBgImg: {
      imgClass: 'album-eleven-bg-img',
      position: this.defaultPosition,
    },
    homeBgImg: {
      imgClass: this.homeBgImg,
      position: this.defaultPosition,
    },
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        let route = this.route.root;
        while (route.firstChild) {
          // Find the last activated route
          route = route.firstChild;
        }

        if (route.snapshot.data.bgImg) {
          this.bgImg = route.snapshot.data.bgImg;
        }

        if (route.snapshot.data.bgPosition) {
          this.bgPosition = route.snapshot.data.bgPosition;
        }
      });
  }

  getBgImg() {
    const config = this.imageConfig[this.bgImg];
    return config ? config.imgClass : 'default-img';
  }

  getBgPosition() {
    const config = this.imageConfig[this.bgImg];
    return config ? config.position : 'default-position';
  }
}
