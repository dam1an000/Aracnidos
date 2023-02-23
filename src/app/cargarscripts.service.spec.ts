import { TestBed } from '@angular/core/testing';

import { CargarscriptsService } from './cargarscripts.service';

describe('CargarscriptsService', () => {
  let service: CargarscriptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarscriptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
