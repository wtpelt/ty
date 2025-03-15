import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Album14Component } from './album-14.component';

describe('AlbumTwelveComponent', () => {
  let component: Album14Component;
  let fixture: ComponentFixture<Album14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Album14Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Album14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
