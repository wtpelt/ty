import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Album16Component } from './album-16.component';

describe('AlbumTwelveComponent', () => {
  let component: Album16Component;
  let fixture: ComponentFixture<Album16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Album16Component],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Album16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
