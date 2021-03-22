import { Component, } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'home';
  public name: string;
  myUrl: any;
  bgImg: string;
  isHomepage: boolean;
  isMainMusicPage: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {}

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
          else if (this.myUrl.url === "/music/album-five"){
            this.bgImg = 'albumFiveBgImg'
          }

          else if (this.myUrl.url === "/"){
            this.bgImg = 'homeBgImg'
          }
          else if (this.myUrl.url === "/about"){
            this.bgImg = 'musicBgImgAll'
          }
          else {
            this.bgImg = ''
          }
          if(this.myUrl.url === "/"){
            this.isHomepage = true
          } else {this.isHomepage = false}

          if(this.myUrl.url === "/music"){
            this.isMainMusicPage = true
          } else {this.isMainMusicPage = false}
      });
 }

  getBgImg(){
    if(this.bgImg === 'musicBgImgAll'){
      return 'music-bg-img-all';
    } else if (this.bgImg === 'albumOneBgImg'){
      return 'album-one-bg-img';
    } else if (this.bgImg === 'albumTwoBgImg'){
      return 'album-two-bg-img';
    } else if (this.bgImg === 'albumThreeBgImg' || this.bgImg === 'homeBgImg'){
      return 'album-three-bg-img';
    } else if (this.bgImg === 'albumFourBgImg'){
      return 'album-four-bg-img';
    } else if (this.bgImg === 'albumFiveBgImg'){
      return 'album-five-bg-img';
    }
    // else if (this.bgImg === 'aboutBgImg'){
    //   return 'url("./assets/oak-tree-large.jpg")';
    // }
  }

  getBgPosition(){
    // if (this.bgImg === 'musicBgImgAll'){
    //   return 'right';
    // }
    if (this.bgImg === 'albumOneBgImg' || this.bgImg === 'homeBgImg'){
      return 'center';
    } else if (this.bgImg === 'albumTwoBgImg'){
      return 'center';
    } else if (this.bgImg === 'albumThreeBgImg'){
      return 'center';
    } else if (this.bgImg === 'albumFourBgImg'){
      return 'top';
    } else if (this.bgImg === 'albumFiveBgImg'){
      return 'bottom';
    }
  }
}
