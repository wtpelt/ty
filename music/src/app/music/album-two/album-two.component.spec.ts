import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumTwoComponent } from './album-two.component';

describe('AlbumTwoComponent', () => {
  let component: AlbumTwoComponent;
  let fixture: ComponentFixture<AlbumTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumTwoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
