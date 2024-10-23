import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CareerFeatureAdminComponent } from './career-feature-admin.component';

describe('CareerFeatureAdminComponent', () => {
  let component: CareerFeatureAdminComponent;
  let fixture: ComponentFixture<CareerFeatureAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerFeatureAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CareerFeatureAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
