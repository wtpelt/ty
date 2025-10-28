import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumThreeComponent } from './album-three.component';

describe('AlbumThreeComponent', () => {
  let component: AlbumThreeComponent;
  let fixture: ComponentFixture<AlbumThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AlbumThreeComponent],
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
