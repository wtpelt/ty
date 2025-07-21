import { Component, HostListener } from '@angular/core';
import { otherPlatformsButtonText } from '../shared/button-label';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'home';
  showSection = false;
  showBackToTop = false;
  otherPlatformsButtonText = otherPlatformsButtonText;
  isMobile = false;

  constructor() {
    // Initial check
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    // Show button when page is scrolled more than 400px
    this.showBackToTop = window.scrollY > 400;
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 1000;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
