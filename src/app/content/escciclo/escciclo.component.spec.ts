import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsccicloComponent } from './escciclo.component';

describe('EsccicloComponent', () => {
  let component: EsccicloComponent;
  let fixture: ComponentFixture<EsccicloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsccicloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsccicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
