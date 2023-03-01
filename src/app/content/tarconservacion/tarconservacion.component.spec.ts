import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarconservacionComponent } from './tarconservacion.component';

describe('TarconservacionComponent', () => {
  let component: TarconservacionComponent;
  let fixture: ComponentFixture<TarconservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarconservacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarconservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
