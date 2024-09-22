import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountFeatureShellComponent } from './account-feature-shell.component';

describe('AccountFeatureShellComponent', () => {
  let component: AccountFeatureShellComponent;
  let fixture: ComponentFixture<AccountFeatureShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountFeatureShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountFeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
