import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscorpionesComponent } from './escorpiones.component';

describe('EscorpionesComponent', () => {
  let component: EscorpionesComponent;
  let fixture: ComponentFixture<EscorpionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscorpionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscorpionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
