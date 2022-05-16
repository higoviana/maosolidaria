import { TestBed } from '@angular/core/testing';

import { VoluntarioDataService } from './voluntario-data.service';

describe('VoluntarioDataService', () => {
  let service: VoluntarioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoluntarioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
