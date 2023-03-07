import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarantulasComponent } from './tarantulas.component';

describe('TarantulasComponent', () => {
  let component: TarantulasComponent;
  let fixture: ComponentFixture<TarantulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarantulasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarantulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
