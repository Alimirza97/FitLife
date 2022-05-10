import { TestBed } from '@angular/core/testing';

import { AddProductToDBService } from './add-product-to-db.service';

describe('AddProductToDBService', () => {
  let service: AddProductToDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddProductToDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
