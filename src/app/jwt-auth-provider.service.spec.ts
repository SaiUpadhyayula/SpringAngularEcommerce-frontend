import { TestBed } from '@angular/core/testing';

import { JwtAuthProviderService } from './jwt-auth-provider.service';

describe('JwtAuthProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtAuthProviderService = TestBed.get(JwtAuthProviderService);
    expect(service).toBeTruthy();
  });
});
