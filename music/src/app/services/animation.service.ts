import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoadingSubject.asObservable();

  constructor(private router: Router) {
    this.setupRouteListeners();
  }

  private setupRouteListeners(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoadingSubject.next(true);
      }

      if (event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError) {
        // Add a small delay to ensure smooth transitions
        setTimeout(() => {
          this.isLoadingSubject.next(false);
        }, 100);
      }
    });
  }

  // Method to trigger custom animations
  public triggerAnimation(element: HTMLElement, animationClass: string): void {
    element.classList.add(animationClass);
    setTimeout(() => {
      element.classList.remove(animationClass);
    }, 500);
  }

  // Method to add staggered animations to multiple elements
  public staggerAnimation(elements: HTMLElement[], animationClass: string, staggerDelay: number = 100): void {
    elements.forEach((element, index) => {
      setTimeout(() => {
        this.triggerAnimation(element, animationClass);
      }, index * staggerDelay);
    });
  }
}
