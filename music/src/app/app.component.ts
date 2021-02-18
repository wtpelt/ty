import { Component, } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'music';
  public name: string;
  myUrl: any;
  bgImg: string;
  isHomepage: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  )
      .subscribe(event => {
          this.myUrl = event;
          if(this.myUrl.url === "/music"){
            this.bgImg = 'musicBgImgAll'
          }
          else if (this.myUrl.url === "/music/album-one"){
            this.bgImg = 'albumOneBgImg'
          }
          else if (this.myUrl.url === "/music/album-two" ){
            this.bgImg = 'albumTwoBgImg'
          }
          else if (this.myUrl.url === "/music/album-three"){
            this.bgImg = 'albumThreeBgImg'
          }
          else if (this.myUrl.url === "/music/album-four"){
            this.bgImg = 'albumFourBgImg'
          }
          else if (this.myUrl.url === "/"){
            this.bgImg = 'homeBgImg'
          }
          else {
            this.bgImg = ''
          }

          if(this.myUrl.url === "/"){
            this.isHomepage = true
          } else {this.isHomepage = false;}
      });
 }

  getBgImg(){
    if(this.bgImg === 'musicBgImgAll'){
      return 'url("./assets/Dreamstep-Lovescape-Artwork.jpg")';
    }
    else if (this.bgImg === 'albumOneBgImg'){
      return 'url("./assets/Liquid-Bloom-ReGen-Deep-Ambient-Remixes-FINAL.jpg")';
    } else if (this.bgImg === 'albumTwoBgImg'){
      return 'url("./assets/ReGen-Ambient-Meditations-cover.jpg")';
    }
    else if (this.bgImg === 'albumThreeBgImg' || this.bgImg === 'homeBgImg'){
      return 'url("./assets/Tylepathy-Remixes-One-With-Nature-Artwork.jpg")';
    }
    else if (this.bgImg === 'albumFourBgImg'){
      return 'url("./assets/Dreamstep-Lovescape-Artwork.jpg")';
    }
  }

  getBgPosition(){
    if (this.bgImg === 'musicBgImgAll'){
      return 'right';
    }
    else if (this.bgImg === 'albumOneBgImg' || this.bgImg === 'homeBgImg'){
      return 'top';
    } else if (this.bgImg === 'albumTwoBgImg'){
      return 'bottom';
    }
    else if (this.bgImg === 'albumThreeBgImg'){
      return 'center';
    }
    else if (this.bgImg === 'albumFourBgImg'){
      return 'right';
    }
  }
}
