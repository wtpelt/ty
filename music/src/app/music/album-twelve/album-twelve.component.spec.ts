import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumTwelveComponent } from './album-twelve.component';

describe('AlbumTwelveComponent', () => {
  let component: AlbumTwelveComponent;
  let fixture: ComponentFixture<AlbumTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AlbumTwelveComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
