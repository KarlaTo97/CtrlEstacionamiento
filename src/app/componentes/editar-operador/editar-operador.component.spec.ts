import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOperadorComponent } from './editar-operador.component';

describe('EditarOperadorComponent', () => {
  let component: EditarOperadorComponent;
  let fixture: ComponentFixture<EditarOperadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarOperadorComponent]
    });
    fixture = TestBed.createComponent(EditarOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
