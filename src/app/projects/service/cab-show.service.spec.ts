import { TestBed, inject } from '@angular/core/testing';

import { CabShowService } from './cab-show.service';

describe('CabShowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CabShowService]
    });
  });

  it('should be created', inject([CabShowService], (service: CabShowService) => {
    expect(service).toBeTruthy();
  }));
});
