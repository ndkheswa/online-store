import { TestBed } from '@angular/core/testing';

import { MyCoursesDataService } from './my-courses-data.service';

describe('MyCoursesDataService', () => {
  let service: MyCoursesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCoursesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
