import { TestBed } from '@angular/core/testing';

import { DashboardCardsService } from './dashboard-card.service';

describe('DashboardCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardCardsService = TestBed.get(DashboardCardsService);
    expect(service).toBeTruthy();
  });
});
