import { TestBed } from '@angular/core/testing';

import { PokeListServiceService } from './poke-list-service.service';

describe('PokeListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeListServiceService = TestBed.get(PokeListServiceService);
    expect(service).toBeTruthy();
  });
});
