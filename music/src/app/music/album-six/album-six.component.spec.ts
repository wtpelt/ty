import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumSixComponent } from './album-six.component';

describe('AlbumSixComponent', () => {
  let component: AlbumSixComponent;
  let fixture: ComponentFixture<AlbumSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AlbumSixComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
