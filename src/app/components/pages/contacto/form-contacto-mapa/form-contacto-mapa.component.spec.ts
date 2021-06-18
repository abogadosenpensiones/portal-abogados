import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContactoMapaComponent } from './form-contacto-mapa.component';

describe('FormContactoMapaComponent', () => {
  let component: FormContactoMapaComponent;
  let fixture: ComponentFixture<FormContactoMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContactoMapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContactoMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
