import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaEstudianteComponent } from './pantalla-estudiante.component';

describe('PantallaEstudianteComponent', () => {
  let component: PantallaEstudianteComponent;
  let fixture: ComponentFixture<PantallaEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
