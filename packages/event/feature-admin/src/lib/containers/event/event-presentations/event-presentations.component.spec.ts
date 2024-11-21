import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { EventPresentationsComponent } from './event-presentations.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy } from '@angular/core';
import { EventForm } from '../../../forms';

class MockControlContainer {
  control = new EventForm();
}

describe('EventPresentationsComponent', () => {
  let component: EventPresentationsComponent;
  let fixture: ComponentFixture<EventPresentationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        EventPresentationsComponent,
      ],
      providers: [
        provideHttpClient(),
        { provide: ControlContainer, useClass: MockControlContainer },
        EventForm,
      ],
    })
      .overrideComponent(EventPresentationsComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPresentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the list of presentations when form has presentations', () => {
    component.form.presentations.add({
      title: 'Presentation 1',
      id: '1',
      description: 'presentation1',
    });
    component.form.presentations.add({
      title: 'Presentation 2',
      id: '2',
      description: 'presentation2',
    });

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const presentationElements = compiled.querySelectorAll('mat-list-item');
    expect(presentationElements.length).toBe(2);
    expect(presentationElements[0].textContent).toContain('Presentation 1');
    expect(presentationElements[1].textContent).toContain('Presentation 2');
  });

  it('should remove presentation from list when remove button is clicked', () => {
    component.form.presentations.add({
      title: 'Presentation 1',
      id: '1',
      description: 'presentation1',
    });
    component.form.presentations.add({
      title: 'Presentation 2',
      id: '2',
      description: 'presentation2',
    });

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const removeButtons = compiled.querySelectorAll('button[mat-icon-button]');

    // Simulando a remoção do primeiro líder
    removeButtons[0].dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.form.presentations.value?.length).toBe(1);
    expect(component.form.presentations.value[0].title).toBe('Presentation 2');
  });
});
