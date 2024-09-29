import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountFeatureAdminComponent } from './account-feature-admin.component';

describe('AccountFeatureAdminComponent', () => {
  let component: AccountFeatureAdminComponent;
  let fixture: ComponentFixture<AccountFeatureAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountFeatureAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountFeatureAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
