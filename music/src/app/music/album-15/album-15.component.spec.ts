import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Album15Component } from './album-15.component';

describe('AlbumTwelveComponent', () => {
  let component: Album15Component;
  let fixture: ComponentFixture<Album15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Album15Component],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Album15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
