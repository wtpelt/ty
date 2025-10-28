import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumFourComponent } from './album-four.component';

describe('AlbumFourComponent', () => {
  let component: AlbumFourComponent;
  let fixture: ComponentFixture<AlbumFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AlbumFourComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
