import { TestBed } from '@angular/core/testing';

import { AngularprojekatService } from './angularprojekat.service';

describe('AngularprojekatService', () => {
  let service: AngularprojekatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularprojekatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
