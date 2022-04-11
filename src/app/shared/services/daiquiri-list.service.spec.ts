import { TestBed } from '@angular/core/testing';

import { DaiquiriListService } from './daiquiri-list.service';

describe('TeamsService', () => {
  let service: DaiquiriListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaiquiriListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
