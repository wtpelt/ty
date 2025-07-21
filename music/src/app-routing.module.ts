import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './app/about/about.component';
import { AlbumEightComponent } from './app/music/album-eight/album-eight.component';
import { AlbumFiveComponent } from './app/music/album-five/album-five.component';
import { AlbumFourComponent } from './app/music/album-four/album-four.component';
import { AlbumNineComponent } from './app/music/album-nine/album-nine.component';
import { AlbumOneComponent } from './app/music/album-one/album-one.component';
import { AlbumSevenComponent } from './app/music/album-seven/album-seven.component';
import { AlbumSixComponent } from './app/music/album-six/album-six.component';
import { AlbumTenComponent } from './app/music/album-ten/album-ten.component';
import { AlbumThreeComponent } from './app/music/album-three/album-three.component';
import { AlbumTwoComponent } from './app/music/album-two/album-two.component';
import { MusicComponent } from './app/music/music.component';
import { AlbumElevenComponent } from './app/music/album-eleven/album-eleven.component';
import { HomeComponent } from './app/home/home.component';
import { LatestMusicComponent } from './app/latest-music/latest-music.component';
import { AlbumTwelveComponent } from './app/music/album-twelve/album-twelve.component';
import { Album13Component } from './app/music/album-13/album-13.component';
import { Album14Component } from './app/music/album-14/album-14.component';
import { Album15Component } from './app/music/album-15/album-15.component';
import { Album16Component } from './app/music/album-16/album-16.component';
import { Album17Component } from './app/music/album-17/album-17.component';
import { Album18Component } from './app/music/album-18/album-18.component';
const routes: Routes = [
  {
    path: 'music',
    component: MusicComponent,
    data: {
      bgImg: 'musicBgImgAll',
      bgPosition: 'center',
      animation: 'music'
    },
    children: [
      {
        path: 'regen-deep-ambient-remixes',
        component: AlbumOneComponent,
        data: {
          bgImg: 'albumOneBgImg',
          bgPosition: 'center',
          animation: 'album'
        },
      },
      {
        path: 'regen-ambient-meditations',
        component: AlbumTwoComponent,
        data: {
          bgImg: 'albumTwoBgImg',
          bgPosition: 'center',
          animation: 'album'
        },
      },
      {
        path: 'tylepathy-remixes-one-with-nature',
        component: AlbumThreeComponent,
        data: {
          bgImg: 'albumThreeBgImg',
          bgPosition: 'center',
          animation: 'album'
        },
      },
      {
        path: 'dreamstep-lovescape',
        component: AlbumFourComponent,
        data: {
          bgImg: 'albumFourBgImg',
          bgPosition: 'top',
          animation: 'album'
        },
      },
      {
        path: 'one-giant-consciousness',
        component: AlbumFiveComponent,
        data: {
          bgImg: 'albumFiveBgImg',
          bgPosition: 'center',
          animation: 'album'
        },
      },
      {
        path: 'afar-tylepathy-remixes',
        component: AlbumSixComponent,
        data: {
          bgImg: 'albumSixBgImg',
          bgPosition: 'top',
          animation: 'album'
        },
      },
      {
        path: 'lily-pad-lullaby-symphony',
        component: AlbumSevenComponent,
        data: {
          bgImg: 'albumSevenBgImg',
          bgPosition: 'bottom',
          animation: 'album'
        },
      },
      {
        path: 'breath-portal-to-stillness',
        component: AlbumEightComponent,
        data: {
          bgImg: 'albumEightBgImg',
          bgPosition: 'top',
          animation: 'album'
        },
      },
      {
        path: 'the-mycelium-is-remixed',
        component: AlbumNineComponent,
        data: {
          bgImg: 'albumNineBgImg',
          animation: 'album'
        },
      },
      {
        path: 'dreamstep-lovescape-suspended-reverb-mix',
        component: AlbumTenComponent,
        data: {
          bgImg: 'albumTenBgImg',
          animation: 'album'
        },
      },
      {
        path: 'fragrance-regenerated',
        component: AlbumElevenComponent,
        data: {
          bgImg: 'albumElevenBgImg',
          animation: 'album'
        },
      },
      {
        path: 'lily-pad-lullaby-sweet-dreams-mix',
        component: AlbumTwelveComponent,
        data: {
          bgImg: 'albumTwelveBgImg',
          animation: 'album'
        },
      },
      {
        path: 'ripples-through-time',
        component: Album13Component,
        data: {
          bgImg: 'album13BgImg',
          animation: 'album'
        },
      },
      {
        path: 'forest-guardians-remixed',
        component: Album14Component,
        data: {
          bgImg: 'album14BgImg',
          animation: 'album'
        },
      },
      {
        path: 'eta-carinae-reborn-in-a-nebula',
        component: Album15Component,
        data: {
          bgImg: 'album15BgImg',
          animation: 'album'
        },
      },
      {
        path: 'organic-intelligence-regenerated',
        component: Album16Component,
        data: {
          bgImg: 'album16BgImg',
          animation: 'album'
        },
      },
      {
        path: 'cesty-snu',
        component: Album17Component,
        data: {
          bgImg: 'album17BgImg',
          animation: 'album'
        },
      },
      {
        path: 'ripples-through-time-haquin-revibe',
        component: Album18Component,
        data: {
          bgImg: 'album18BgImg',
          animation: 'album'
        },
      },
      {
        path: '',
        component: LatestMusicComponent,
        // put the latest/featured album's bgImg variable here
        data: { bgImg: 'album17BgImg', bgPosition: 'center', animation: 'latest' },
      },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { bgImg: 'albumSixBgImg', bgPosition: 'center', animation: 'about' },
  },
  {
    path: '',
    component: HomeComponent,
    data: { bgImg: 'homeBgImg', bgPosition: 'center', animation: 'home' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
