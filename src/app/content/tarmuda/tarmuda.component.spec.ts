import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarmudaComponent } from './tarmuda.component';

describe('TarmudaComponent', () => {
  let component: TarmudaComponent;
  let fixture: ComponentFixture<TarmudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarmudaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarmudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
