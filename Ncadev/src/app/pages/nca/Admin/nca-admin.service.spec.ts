import { TestBed } from '@angular/core/testing';

import { NcaAdminService } from './nca-admin.service';

describe('NcaAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NcaAdminService = TestBed.get(NcaAdminService);
    expect(service).toBeTruthy();
  });
});
