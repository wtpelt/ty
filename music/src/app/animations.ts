import { trigger, transition, style, animate } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ opacity: 0 }),
    animate('600ms ease', style({ opacity: 1 }))
  ])
]);
