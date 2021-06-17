import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorqueNosotrosComponent } from './porque-nosotros.component';

describe('PorqueNosotrosComponent', () => {
  let component: PorqueNosotrosComponent;
  let fixture: ComponentFixture<PorqueNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorqueNosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorqueNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
