import { TestBed } from '@angular/core/testing';

import { ImagenesApiService } from './imagenes-api.service';

describe('ImagenesApiService', () => {
  let service: ImagenesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
