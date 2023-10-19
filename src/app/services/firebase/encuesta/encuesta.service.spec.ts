import { TestBed } from '@angular/core/testing';

import { ActoresService } from './encuesta.service';

describe('ActoresService', () => {
  let service: ActoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
