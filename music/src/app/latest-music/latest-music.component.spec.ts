import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { LatestMusicComponent } from './latest-music.component';

describe('LatestMusicComponent', () => {
  let component: LatestMusicComponent;
  let fixture: ComponentFixture<LatestMusicComponent>;

  const activatedRouteMock = {
    snapshot: {
      data: {},
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [LatestMusicComponent],
    providers: [
        {
            provide: ActivatedRoute,
            useValue: activatedRouteMock,
        },
    ],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
