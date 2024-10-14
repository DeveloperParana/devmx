import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventFeatureAdminComponent } from './event-feature-admin.component';

describe('EventFeatureAdminComponent', () => {
  let component: EventFeatureAdminComponent;
  let fixture: ComponentFixture<EventFeatureAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventFeatureAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventFeatureAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
