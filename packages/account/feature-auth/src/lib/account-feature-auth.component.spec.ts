import { AccountFeatureAuthComponent } from './account-feature-auth.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthFacade } from '@devmx/account-data-access';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { of } from 'rxjs';

describe('AccountFeatureAuthComponent', () => {
  let component: AccountFeatureAuthComponent;
  let fixture: ComponentFixture<AccountFeatureAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, MatTabsModule, AccountFeatureAuthComponent],
      providers: [
        provideAnimations(),
        {
          provide: AuthFacade,
          useValue: {
            connected$: of(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountFeatureAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
