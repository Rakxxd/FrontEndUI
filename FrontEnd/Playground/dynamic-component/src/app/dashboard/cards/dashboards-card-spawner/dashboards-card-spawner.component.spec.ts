import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardSpawnerComponent } from './dashboards-card-spawner.component';

describe('DashboardsCardSpawnerComponent', () => {
  let component: DashboardCardSpawnerComponent;
  let fixture: ComponentFixture<DashboardCardSpawnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCardSpawnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardSpawnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
