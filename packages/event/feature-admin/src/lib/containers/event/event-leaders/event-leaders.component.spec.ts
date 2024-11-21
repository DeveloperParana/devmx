import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { EventLeadersComponent } from './event-leaders.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy } from '@angular/core';
import { EventForm } from '../../../forms';

class MockControlContainer {
  control = new EventForm();
}

describe('EventLeadersComponent', () => {
  let component: EventLeadersComponent;
  let fixture: ComponentFixture<EventLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        EventLeadersComponent,
      ],
      providers: [
        provideHttpClient(),
        { provide: ControlContainer, useClass: MockControlContainer },
        EventForm,
      ],
    })
      .overrideComponent(EventLeadersComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the list of leaders when form has leaders', () => {
    component.form.leaders.add({
      displayName: 'Leader 1',
      id: '1',
      name: 'leader1',
    });
    component.form.leaders.add({
      displayName: 'Leader 2',
      id: '2',
      name: 'leader2',
    });

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const leaderElements = compiled.querySelectorAll('mat-list-item');
    expect(leaderElements.length).toBe(2);
    expect(leaderElements[0].textContent).toContain('Leader 1');
    expect(leaderElements[1].textContent).toContain('Leader 2');
  });

  it('should remove leader from list when remove button is clicked', () => {
    component.form.leaders.add({
      displayName: 'Leader 1',
      id: '1',
      name: 'leader1',
    });
    component.form.leaders.add({
      displayName: 'Leader 2',
      id: '2',
      name: 'leader2',
    });

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const removeButtons = compiled.querySelectorAll('button[mat-icon-button]');

    // Simulando a remoção do primeiro líder
    removeButtons[0].dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.form.leaders.value?.length).toBe(1);
    expect(component.form.leaders.value[0].displayName).toBe('Leader 2');
  });
});
