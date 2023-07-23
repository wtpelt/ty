import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumFiveComponent } from './album-five.component';

describe('AlbumFiveComponent', () => {
  let component: AlbumFiveComponent;
  let fixture: ComponentFixture<AlbumFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumFiveComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
