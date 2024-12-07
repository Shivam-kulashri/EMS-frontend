import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardCandidateComponent } from './onboard-candidate.component';

describe('OnboardCandidateComponent', () => {
  let component: OnboardCandidateComponent;
  let fixture: ComponentFixture<OnboardCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardCandidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
