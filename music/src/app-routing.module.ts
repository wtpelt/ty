import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './app/about/about.component';
import { AlbumFiveComponent } from './app/music/album-five/album-five.component';
import { AlbumFourComponent } from './app/music/album-four/album-four.component';
import { AlbumOneComponent } from './app/music/album-one/album-one.component';
import { AlbumSevenComponent } from './app/music/album-seven/album-seven.component';
import { AlbumSixComponent } from './app/music/album-six/album-six.component';
import { AlbumThreeComponent } from './app/music/album-three/album-three.component';
import { AlbumTwoComponent } from './app/music/album-two/album-two.component';
import { MusicComponent } from './app/music/music.component';

const routes: Routes = [
  { path: 'music', component: MusicComponent ,
  children: [
    {
      path: 'album-one', // child route path
      component: AlbumOneComponent , // child route component that the router renders
    },
    {
      path: 'album-two',
      component: AlbumTwoComponent , // another child route component that the router renders
    },
    {
      path: 'album-three',
      component: AlbumThreeComponent , // another child route component that the router renders
    },
    {
      path: 'album-four',
      component: AlbumFourComponent , // another child route component that the router renders
    },
    {
      path: 'album-five',
      component: AlbumFiveComponent , // another child route component that the router renders
    },
    {
      path: 'album-six',
      component: AlbumSixComponent , // another child route component that the router renders
    },
    {
      path: 'album-seven',
      component: AlbumSevenComponent , // another child route component that the router renders
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
