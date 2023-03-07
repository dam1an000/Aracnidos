import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarAnatomiaComponent } from './tar-anatomia.component';

describe('TarAnatomiaComponent', () => {
  let component: TarAnatomiaComponent;
  let fixture: ComponentFixture<TarAnatomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarAnatomiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarAnatomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
