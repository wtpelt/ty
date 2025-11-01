import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { otherPlatformsButtonText } from '../shared/button-label';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = 'home';
  showSection = false;
  showSpotifyPlaylist = false;
  otherPlatformsButtonText = otherPlatformsButtonText;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Intentionally empty - use AfterViewInit for lazy loading
  }

  ngAfterViewInit(): void {
    // Use Intersection Observer for lazy loading Spotify playlist
    // This delays loading until user scrolls near it, improving initial page load
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.showSpotifyPlaylist) {
            this.showSpotifyPlaylist = true;
            this.cdr.detectChanges(); // Manually trigger change detection
            observer.disconnect();
          }
        });
      }, {
        rootMargin: '300px' // Start loading 300px before it comes into view
      });

      // Use setTimeout to ensure DOM is ready
      setTimeout(() => {
        const spotifyContainer = document.querySelector('.spotify-tylepathy-preview');
        if (spotifyContainer) {
          observer.observe(spotifyContainer);
        }
      }, 100);
    } else {
      // Fallback for browsers without IntersectionObserver
      setTimeout(() => {
        this.showSpotifyPlaylist = true;
        this.cdr.detectChanges();
      }, 3000);
    }
  }
}
