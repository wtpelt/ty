import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Data } from '@angular/router';
import { MusicComponent } from './music.component';

describe('MusicComponent', () => {
  let component: MusicComponent;
  let fixture: ComponentFixture<MusicComponent>;

  const mockActivatedRoute = {
    snapshot: {
      data: {
        bgImg: 'testImg',
        bgPosition: 'testPosition',
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterTestingModule, MusicComponent],
    providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize bgImg and bgPosition correctly', () => {
    expect(component.bgImg).toEqual('testImg');
    expect(component.bgPosition).toEqual('testPosition');
  });
});
