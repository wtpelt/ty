import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumSevenComponent } from './album-seven.component';

describe('AlbumSevenComponent', () => {
  let component: AlbumSevenComponent;
  let fixture: ComponentFixture<AlbumSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AlbumSevenComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
