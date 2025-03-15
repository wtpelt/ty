import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Album13Component } from './album-13.component';

describe('AlbumTwelveComponent', () => {
  let component: Album13Component;
  let fixture: ComponentFixture<Album13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Album13Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Album13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
