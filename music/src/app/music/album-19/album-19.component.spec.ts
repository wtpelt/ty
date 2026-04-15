import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album19Component } from './album-19.component';

describe('Album19Component', () => {
  let component: Album19Component;
  let fixture: ComponentFixture<Album19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Album19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Album19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


