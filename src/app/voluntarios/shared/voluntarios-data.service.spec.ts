import { TestBed } from '@angular/core/testing';

import { VoluntariosDataService } from './voluntarios-data.service';

describe('VoluntariosDataService', () => {
  let service: VoluntariosDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoluntariosDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
