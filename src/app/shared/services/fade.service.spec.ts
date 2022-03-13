import { TestBed } from '@angular/core/testing';

import { FadeService } from './fade.service';

describe('FadeService', () => {
  let service: FadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
