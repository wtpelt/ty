import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { Observable, Subject, of } from 'rxjs';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LatestMusicComponent } from './latest-music/latest-music.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  const routerEvents = new Subject();

  const routerMock = {
    navigate: jasmine.createSpy('navigate'),
    events: routerEvents.asObservable(),
    createUrlTree: () => {},
    serializeUrl: (urlTree: any) => '',
  };

  const activatedRouteMock = {
    root: {
      firstChild: {
        snapshot: {
          data: {},
        },
        data: of({}),
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        [
          AppComponent,
          HeaderComponent,
          FooterComponent,
          HomeComponent,
          LatestMusicComponent,
        ],
      ],
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
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should display HomeComonent when isHomepage is true', () => {
    component.isHomepage = true;
    fixture.detectChanges();

    const homeElement = fixture.debugElement.query(By.directive(HomeComponent));

    expect(homeElement).toBeTruthy();
  });

  it('should not display HomeComonent when isHomepage is false', () => {
    component.isHomepage = false;
    fixture.detectChanges();

    const homeElement = fixture.debugElement.query(By.directive(HomeComponent));

    expect(homeElement).toBeNull();
  });

  it('should display LatestMusicComponent when isMainMusicPage is true', () => {
    component.isMainMusicPage = true;
    fixture.detectChanges();

    const latestMusicElement = fixture.debugElement.query(
      By.directive(LatestMusicComponent)
    );

    expect(latestMusicElement).toBeTruthy();
  });

  it('should not display LatestMusicComponent when isMainMusicPage is false', () => {
    component.isMainMusicPage = false;
    fixture.detectChanges();

    const latestMusicElement = fixture.debugElement.query(
      By.directive(LatestMusicComponent)
    );

    expect(latestMusicElement).toBeNull();
  });

  describe('getBgImg', () => {
    it('should return the correct class', () => {
      component.bgImg = 'musicBgImgAll';
      expect(component.getBgImg()).toEqual('music-all-bg-img');
    });

    it('should return default class if bgImg is not known', () => {
      component.bgImg = 'unknown';
      expect(component.getBgImg()).toEqual('default-img');
    });
  });

  describe('getBgPosition', () => {
    it('should return the correct position for a given background image', () => {
      component.bgImg = 'albumSevenBgImg';
      expect(component.getBgPosition()).toEqual('bottom');
    });

    it('should return default position if bgImg is not known', () => {
      component.bgImg = 'unknown';
      expect(component.getBgPosition()).toEqual('default-position');
    });
  });

  describe('ngOnInit', () => {
    it('should set bgImg and bgPosition on navigation end', () => {
      const mockData = {
        bgImg: 'albumOneBgImg',
        bgPosition: 'center',
      };

      activatedRouteMock.root.firstChild.snapshot.data = mockData;

      component.ngOnInit();

      routerEvents.next(
        new NavigationEnd(0, '/dummyPreviousUrl', '/dummyCurrentUrl')
      );

      expect(component.bgImg).toEqual(mockData.bgImg);
      expect(component.bgPosition).toEqual(mockData.bgPosition);
    });
  });
});
