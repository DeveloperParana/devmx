import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateTimePickerComponent } from '@devmx/shared-ui-global/datetime';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EventFormComponent } from './event-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ChangeDetectionStrategy } from '@angular/core';
import { EventForm } from '../../../forms';

class MockControlContainer {
  control = new EventForm();
}

describe('EventFormComponent', () => {
  let component: EventFormComponent;
  let fixture: ComponentFixture<EventFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        EventFormComponent,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        DateTimePickerComponent,
      ],
      providers: [
        { provide: ControlContainer, useClass: MockControlContainer },
      ],
    })
      .overrideComponent(EventFormComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve ter o formulário inicializado com valores padrão', () => {
    const form = component.form;
    expect(form.get('title')?.value).toBe('');
    expect(form.get('duration')?.value).toBe('2h');
    expect(form.get('visible')?.value).toBe(true);
    expect(form.get('date')?.value).toBe(EventForm.date);
  });

  it('deve desabilitar o controle de link por padrão', () => {
    expect(component.form.get('link')?.disabled).toBe(true);
  });

  it('deve habilitar o endereço e desabilitar o link quando o formato for "in-person"', () => {
    component.form.onFormatChange('in-person');
    expect(component.form.get('address')?.enabled).toBe(true);
    expect(component.form.get('link')?.disabled).toBe(true);
  });

  it('deve habilitar o link e desabilitar o endereço quando o formato estiver "online"', () => {
    component.form.onFormatChange('online');
    expect(component.form.get('link')?.enabled).toBe(true);
    expect(component.form.get('address')?.disabled).toBe(true);
  });

  it('deve habilitar tanto o link quanto o endereço quando o formato for "mixed"', () => {
    component.form.onFormatChange('mixed');
    expect(component.form.get('link')?.enabled).toBe(true);
    expect(component.form.get('address')?.enabled).toBe(true);
  });
});
