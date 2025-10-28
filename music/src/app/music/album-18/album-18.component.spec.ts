import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Album18Component } from './album-18.component';

describe('AlbumTwelveComponent', () => {
  let component: Album18Component;
  let fixture: ComponentFixture<Album18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Album18Component],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Album18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
