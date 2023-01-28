import { TestBed } from '@angular/core/testing';

import { EditReviewService } from './edit-review.service';

describe('EditReviewService', () => {
  let service: EditReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
