import { TestBed, inject } from '@angular/core/testing';

import { TakepicService } from './takepic.service';

describe('TakepicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TakepicService]
    });
  });

  it('should be created', inject([TakepicService], (service: TakepicService) => {
    expect(service).toBeTruthy();
  }));
});
