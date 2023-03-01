import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscmudaComponent } from './escmuda.component';

describe('EscmudaComponent', () => {
  let component: EscmudaComponent;
  let fixture: ComponentFixture<EscmudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscmudaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscmudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
