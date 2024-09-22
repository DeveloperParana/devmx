import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditablePresentationComponent } from './editable-presentation.component';

describe('EditablePresentationComponent', () => {
  let component: EditablePresentationComponent;
  let fixture: ComponentFixture<EditablePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditablePresentationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditablePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
