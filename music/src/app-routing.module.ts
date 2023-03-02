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

const routes: Routes = [
  { path: 'music', component: MusicComponent ,
  children: [
    {
      path: 'regen-deep-ambient-remixes', // child route path
      component: AlbumOneComponent , // child route component that the router renders
    },
    {
      path: 'regen-ambient-meditations',
      component: AlbumTwoComponent , // another child route component that the router renders
    },
    {
      path: 'tylepathy-remixes-one-with-nature',
      component: AlbumThreeComponent , // another child route component that the router renders
    },
    {
      path: 'dreamstep-lovescape',
      component: AlbumFourComponent , // another child route component that the router renders
    },
    {
      path: 'one-giant-consciousness',
      component: AlbumFiveComponent , // another child route component that the router renders
    },
    {
      path: 'afar-tylepathy-remixes',
      component: AlbumSixComponent , // another child route component that the router renders
    },
    {
      path: 'lily-pad-lullaby-symphony',
      component: AlbumSevenComponent , // another child route component that the router renders
    },
    {
      path: 'breath-portal-to-stillness',
      component: AlbumEightComponent , // another child route component that the router renders
    },
    {
      path: 'the-mycelium-is-remixed',
      component: AlbumNineComponent , // another child route component that the router renders
    },
    {
      path: 'dreamstep-lovescape-suspended-reverb-mix',
      component: AlbumTenComponent , // another child route component that the router renders
    },

  ],
},
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: '', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  //

];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
