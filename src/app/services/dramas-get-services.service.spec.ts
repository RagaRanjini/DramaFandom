import { TestBed } from '@angular/core/testing';

import { DramasGetServicesService } from './dramas-get-services.service';

describe('DramasGetServicesService', () => {
  let service: DramasGetServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DramasGetServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
