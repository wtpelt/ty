import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumEightComponent } from './album-eight.component';

describe('AlbumEightComponent', () => {
  let component: AlbumEightComponent;
  let fixture: ComponentFixture<AlbumEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AlbumEightComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
