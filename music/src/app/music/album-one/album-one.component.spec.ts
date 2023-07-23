import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumOneComponent } from './album-one.component';

describe('AlbumOneComponent', () => {
  let component: AlbumOneComponent;
  let fixture: ComponentFixture<AlbumOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumOneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
