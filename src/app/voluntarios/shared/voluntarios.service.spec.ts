import { TestBed } from '@angular/core/testing';

import { VoluntarioService } from './voluntarios.service';

describe('VoluntariosService', () => {
  let service: VoluntarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoluntarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
