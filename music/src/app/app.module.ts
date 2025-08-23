import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app-routing.module';
import { AboutComponent } from './about/about.component';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LatestMusicComponent } from './latest-music/latest-music.component';
import { MusicComponent } from './music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MusicComponent,
    HeaderComponent,
    HomeComponent,
    LatestMusicComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  exports: [HeaderComponent, HomeComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
