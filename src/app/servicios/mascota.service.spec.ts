import { TestBed } from '@angular/core/testing';

import { mascotaService } from './mascota.service';

describe('MascotaService', () => {
  let service: mascotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(mascotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
