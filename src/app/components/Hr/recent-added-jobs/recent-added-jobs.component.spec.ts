import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAddedJobsComponent } from './recent-added-jobs.component';

describe('RecentAddedJobsComponent', () => {
  let component: RecentAddedJobsComponent;
  let fixture: ComponentFixture<RecentAddedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentAddedJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentAddedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
