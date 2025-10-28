import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumElevenComponent } from './album-eleven.component';

describe('AlbumElevenComponent', () => {
  let component: AlbumElevenComponent;
  let fixture: ComponentFixture<AlbumElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AlbumElevenComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
