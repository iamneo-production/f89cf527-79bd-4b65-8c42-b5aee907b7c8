import { TestBed } from '@angular/core/testing';

import { ViewReviewService } from './view-review.service';

describe('ViewReviewService', () => {
  let service: ViewReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
