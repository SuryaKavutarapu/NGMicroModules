import { TestBed } from '@angular/core/testing';

import { NotfoundService } from './notfound.service';

describe('NotfoundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotfoundService = TestBed.get(NotfoundService);
    expect(service).toBeTruthy();
  });
});
