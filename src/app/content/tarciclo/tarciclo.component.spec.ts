import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarcicloComponent } from './tarciclo.component';

describe('TarcicloComponent', () => {
  let component: TarcicloComponent;
  let fixture: ComponentFixture<TarcicloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarcicloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarcicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
