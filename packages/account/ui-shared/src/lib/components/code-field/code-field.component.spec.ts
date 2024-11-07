import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpperDirective } from '@devmx/shared-ui-global/forms';
import { CodeFieldComponent } from './code-field.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `
    <form [formGroup]="form">
      <devmx-code-field formControlName="code" />
    </form>
  `,
  imports: [ReactiveFormsModule, UpperDirective, CodeFieldComponent],
  standalone: true,
})
class ParentComponent {
  form = new FormGroup({
    code: new FormControl(),
  });
}

describe('CodeFieldComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentComponent],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente pai com o formulário', () => {
    expect(component).toBeTruthy();
    expect(component.form).toBeDefined();
  });

  it('deve inicializar o controle de formulário para o campo de código', () => {
    const codeFieldControl = component.form.get('code');
    expect(codeFieldControl).toBeDefined();
    expect(codeFieldControl instanceof FormControl).toBe(true);
  });

  it('deve transformar a entrada em maiúsculas no campo de código', () => {
    const codeField = fixture.debugElement.query(By.css('devmx-code-field'))
      .componentInstance as CodeFieldComponent;

    codeField.form.controls['a'].setValue('a');
    codeField.form.controls['b'].setValue('b');
    codeField.form.controls['c'].setValue('c');
    codeField.form.controls['d'].setValue('d');

    codeField.form.updateValueAndValidity();

    expect(component.form.controls.code.value).toBe('ABCD');
  });

  it('deve mover o foco para a próxima entrada quando o caractere for inserido', () => {
    const codeField = fixture.debugElement.query(By.css('devmx-code-field'))
      .componentInstance as CodeFieldComponent;
    const inputA = fixture.debugElement.query(
      By.css('input[formControlName="a"]')
    ).nativeElement;
    const inputB = fixture.debugElement.query(
      By.css('input[formControlName="b"]')
    ).nativeElement;

    const focusSpy = jest.spyOn(inputB, 'focus');

    inputA.value = 'A';
    inputA.dispatchEvent(new Event('input'));

    codeField.onInput(inputA, inputB);

    expect(focusSpy).toHaveBeenCalled();
  });

  it('deve definir o valor concatenado e maiúsculo no controle de formulário principal quando válido', () => {
    const codeField = fixture.debugElement.query(By.css('devmx-code-field'))
      .componentInstance as CodeFieldComponent;
    const mainControl = component.form.get('code');

    codeField.form.controls['a'].setValue('a');
    codeField.form.controls['b'].setValue('b');
    codeField.form.controls['c'].setValue('c');
    codeField.form.controls['d'].setValue('d');

    codeField.form.updateValueAndValidity();

    expect(mainControl?.value).toBe('ABCD');
  });

  it('deve colar o código corretamente e definir o foco na última entrada', () => {
    const codeField = fixture.debugElement.query(By.css('devmx-code-field'))
      .componentInstance as CodeFieldComponent;
    const inputD = fixture.debugElement.query(
      By.css('input[formControlName="d"]')
    ).nativeElement;

    const pasteEvent = {
      preventDefault: jest.fn(),
      clipboardData: {
        getData: () => 'abcd',
      },
    } as unknown as ClipboardEvent;

    codeField.onPaste(pasteEvent, inputD);

    expect(codeField.form.controls['a'].value).toBe('a');
    expect(codeField.form.controls['b'].value).toBe('b');
    expect(codeField.form.controls['c'].value).toBe('c');
    expect(codeField.form.controls['d'].value).toBe('d');
    expect(document.activeElement).toBe(inputD);
  });
});
