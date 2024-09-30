import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventFeatureShellComponent } from './event-feature-shell.component';

describe('EventFeatureShellComponent', () => {
  let component: EventFeatureShellComponent;
  let fixture: ComponentFixture<EventFeatureShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventFeatureShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventFeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
