import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumTenComponent } from './album-ten.component';

describe('AlbumTenComponent', () => {
  let component: AlbumTenComponent;
  let fixture: ComponentFixture<AlbumTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AlbumTenComponent],
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
