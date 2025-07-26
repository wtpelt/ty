import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { otherPlatformsButtonText } from '../shared/button-label';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'home';
  showSection = false;
  showBackToTop = false;
  otherPlatformsButtonText = otherPlatformsButtonText;
  isMobile = false;

  private scrollHandler = this.onScroll.bind(this);

  constructor() {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.attachScrollListener();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.attachScrollListener();
    }, 100);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollHandler);
    document.removeEventListener('scroll', this.scrollHandler);

    const fullWrap = document.getElementById('full-wrap');
    const routeAnimation = document.querySelector('.route-animation');
    const mainContent = document.querySelector('main');

    if (fullWrap) fullWrap.removeEventListener('scroll', this.scrollHandler);
    if (routeAnimation) routeAnimation.removeEventListener('scroll', this.scrollHandler);
    if (mainContent) mainContent.removeEventListener('scroll', this.scrollHandler);
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 1000;
  }

  private attachScrollListener() {
    const targets = [
      window,
      document,
      document.getElementById('full-wrap'),
      document.querySelector('.route-animation'),
      document.querySelector('main'),
      document.body
    ].filter(Boolean);

    targets.forEach(target => {
      if (target) {
        target.addEventListener('scroll', this.scrollHandler, { passive: true });
      }
    });
  }

  onScroll() {
    const scrollY = window.scrollY || 0;
    const fullWrapScroll = document.getElementById('full-wrap')?.scrollTop || 0;
    const routeScroll = document.querySelector('.route-animation')?.scrollTop || 0;
    const mainScroll = document.querySelector('main')?.scrollTop || 0;
    const bodyScroll = document.body.scrollTop || 0;

    const maxScroll = Math.max(scrollY, fullWrapScroll, routeScroll, mainScroll, bodyScroll);

    this.showBackToTop = maxScroll > 50;
  }

  scrollToTop() {
    const bodyScroll = document.body.scrollTop || 0;

    if (bodyScroll > 0) {
      document.body.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const fullWrap = document.getElementById('full-wrap');
    const routeAnimation = document.querySelector('.route-animation');

    if (fullWrap && fullWrap.scrollTop > 0) {
      fullWrap.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (routeAnimation && (routeAnimation as HTMLElement).scrollTop > 0) {
      (routeAnimation as HTMLElement).scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
