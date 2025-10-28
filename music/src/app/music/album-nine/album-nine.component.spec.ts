import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumNineComponent } from './album-nine.component';

describe('AlbumNineComponent', () => {
  let component: AlbumNineComponent;
  let fixture: ComponentFixture<AlbumNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AlbumNineComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
