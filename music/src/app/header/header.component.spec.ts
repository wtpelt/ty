import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const routerEventsSubject = new Subject();

  const routerMock = {
    navigate: jasmine.createSpy('navigate'),
    events: routerEventsSubject.asObservable(),
    createUrlTree: () => {},
    serializeUrl: (urlTree: any) => '',
  };

  const activatedRouteMock = {
    snapshot: {
      data: {},
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterTestingModule, HeaderComponent],
    providers: [
        {
            provide: Router,
            useValue: routerMock,
        },
        {
            provide: ActivatedRoute,
            useValue: activatedRouteMock,
        },
    ],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.ngOnInit(); // add this line
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the title correctly', () => {
    routerEventsSubject.next(new NavigationEnd(0, '/music', '/music'));
    expect(component.title).toEqual('Music');
  });

  describe('on navigation end', () => {
    const cases = [
      { url: '/music', expectedTitle: 'Music' },
      { url: '/music/regen-deep-ambient-remixes', expectedTitle: 'Music' },
      { url: '/about', expectedTitle: 'About' },
      { url: '/', expectedTitle: 'Home' },
      { url: '/other', expectedTitle: '' },
    ];

    cases.forEach(({ url, expectedTitle }) => {
      it(`should set title to "${expectedTitle}" when navigate to "${url}"`, () => {
        routerEventsSubject.next(new NavigationEnd(0, url, url));
        expect(component.title).toBe(expectedTitle);
      });
    });
  });
});
