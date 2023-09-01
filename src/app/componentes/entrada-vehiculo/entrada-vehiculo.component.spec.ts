import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntradaVehiculoComponent } from './entrada-vehiculo.component';

describe('EntradaVehiculoComponent', () => {
  let component: EntradaVehiculoComponent;
  let fixture: ComponentFixture<EntradaVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaVehiculoComponent ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaVehiculoComponent]
    });
    fixture = TestBed.createComponent(EntradaVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
