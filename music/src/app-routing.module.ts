import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './app/about/about.component';
import { MusicComponent } from './app/music/music.component';

const routes: Routes = [
  { path: 'music-component', component: MusicComponent },
  { path: 'about-component', component: AboutComponent },
  { path: '',   redirectTo: '/app-component', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  //
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
