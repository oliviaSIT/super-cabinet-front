import { TestBed, inject } from '@angular/core/testing';

import { ProShowService } from './pro-show.service';

describe('ProShowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProShowService]
    });
  });

  it('should be created', inject([ProShowService], (service: ProShowService) => {
    expect(service).toBeTruthy();
  }));
});
