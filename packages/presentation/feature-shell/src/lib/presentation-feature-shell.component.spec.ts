import { PresentationFeatureShellComponent } from './presentation-feature-shell.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthFacade } from '@devmx/account-data-access';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';

describe('PresentationFeatureShellComponent', () => {
  let component: PresentationFeatureShellComponent;
  let fixture: ComponentFixture<PresentationFeatureShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        MatDialogModule,
        LayoutModule,
        PresentationFeatureShellComponent
      ],
      providers: [
        provideAnimations(),
        {
          provide: AuthFacade,
          useValue: {
            user$: of(),
            connected$: of(false),
            loadAuthUser() {
              return
            }
          }
        },
        {
          provide: PresentationFacade,
          useValue: {
            presentations$: of({ data: [], page: 0, size: 0 }),
            presentation$: of(false),
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PresentationFeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
