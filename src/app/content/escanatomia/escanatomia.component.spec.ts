import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscanatomiaComponent } from './escanatomia.component';

describe('EscanatomiaComponent', () => {
  let component: EscanatomiaComponent;
  let fixture: ComponentFixture<EscanatomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscanatomiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscanatomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
