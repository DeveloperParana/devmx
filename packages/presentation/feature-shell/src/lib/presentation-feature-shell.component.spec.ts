import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentationFeatureShellComponent } from './presentation-feature-shell.component';

describe('PresentationFeatureShellComponent', () => {
  let component: PresentationFeatureShellComponent;
  let fixture: ComponentFixture<PresentationFeatureShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationFeatureShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PresentationFeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
