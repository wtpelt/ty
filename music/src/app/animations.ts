import { trigger, transition, style, animate, query, stagger, group } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  // Home page transitions
  transition('home => *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      })
    ], { optional: true }),
    query(':leave', [
      animate('400ms ease-out', style({
        opacity: 0,
        transform: 'scale(0.95)'
      }))
    ], { optional: true }),
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(30px)'
      }),
      animate('500ms ease-in', style({
        opacity: 1,
        transform: 'translateY(0)'
      }))
    ], { optional: true })
  ]),

  // Music page transitions
  transition('music => *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      })
    ], { optional: true }),
    query(':leave', [
      animate('300ms ease-out', style({
        opacity: 0,
        transform: 'translateX(-20px)'
      }))
    ], { optional: true }),
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(20px)'
      }),
      animate('400ms ease-in', style({
        opacity: 1,
        transform: 'translateX(0)'
      }))
    ], { optional: true })
  ]),

  // Album page transitions
  transition('album => *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      })
    ], { optional: true }),
    query(':leave', [
      animate('350ms ease-out', style({
        opacity: 0,
        transform: 'scale(1.05)'
      }))
    ], { optional: true }),
    query(':enter', [
      style({
        opacity: 0,
        transform: 'scale(0.9)'
      }),
      animate('450ms ease-in', style({
        opacity: 1,
        transform: 'scale(1)'
      }))
    ], { optional: true })
  ]),

  // About page transitions
  transition('about => *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      })
    ], { optional: true }),
    query(':leave', [
      animate('400ms ease-out', style({
        opacity: 0,
        transform: 'rotateY(-10deg)'
      }))
    ], { optional: true }),
    query(':enter', [
      style({
        opacity: 0,
        transform: 'rotateY(10deg)'
      }),
      animate('500ms ease-in', style({
        opacity: 1,
        transform: 'rotateY(0deg)'
      }))
    ], { optional: true })
  ]),

  // Default transition for any other route changes
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
        transform: 'translateY(20px)'
      })
    ], { optional: true }),

    query(':leave', [
      animate('300ms ease-out', style({
        opacity: 0,
        transform: 'translateY(-20px)'
      }))
    ], { optional: true }),

    query(':enter', [
      animate('400ms ease-in', style({
        opacity: 1,
        transform: 'translateY(0)'
      }))
    ], { optional: true })
  ])
]);

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease-in', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('200ms ease-out', style({ opacity: 0 }))
  ])
]);

export const slideAnimation = trigger('slideAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('400ms ease-out', style({ transform: 'translateX(0)' }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateX(-100%)' }))
  ])
]);

export const scaleAnimation = trigger('scaleAnimation', [
  transition(':enter', [
    style({ transform: 'scale(0.8)', opacity: 0 }),
    animate('400ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'scale(1.1)', opacity: 0 }))
  ])
]);

export const staggerAnimation = trigger('staggerAnimation', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger(100, [
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);
