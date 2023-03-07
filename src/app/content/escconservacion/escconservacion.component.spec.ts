import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscconservacionComponent } from './escconservacion.component';

describe('EscconservacionComponent', () => {
  let component: EscconservacionComponent;
  let fixture: ComponentFixture<EscconservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscconservacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscconservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
