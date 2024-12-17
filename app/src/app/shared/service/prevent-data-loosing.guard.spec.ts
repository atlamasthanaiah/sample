import { TestBed } from '@angular/core/testing';

import { PreventDataLoosingGuard } from './prevent-data-loosing.guard';

describe('PreventDataLoosingGuard', () => {
  let guard: PreventDataLoosingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventDataLoosingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
