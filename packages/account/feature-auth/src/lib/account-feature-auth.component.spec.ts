import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountFeatureAuthComponent } from './account-feature-auth.component';

describe('AccountFeatureAuthComponent', () => {
  let component: AccountFeatureAuthComponent;
  let fixture: ComponentFixture<AccountFeatureAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountFeatureAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountFeatureAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
