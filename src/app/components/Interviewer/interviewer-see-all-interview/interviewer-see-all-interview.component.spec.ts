import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerSeeAllInterviewComponent } from './interviewer-see-all-interview.component';

describe('InterviewerSeeAllInterviewComponent', () => {
  let component: InterviewerSeeAllInterviewComponent;
  let fixture: ComponentFixture<InterviewerSeeAllInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewerSeeAllInterviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerSeeAllInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
