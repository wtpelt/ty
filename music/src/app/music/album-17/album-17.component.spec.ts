import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Album17Component } from './album-17.component';

describe('AlbumTwelveComponent', () => {
  let component: Album17Component;
  let fixture: ComponentFixture<Album17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Album17Component],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Album17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
