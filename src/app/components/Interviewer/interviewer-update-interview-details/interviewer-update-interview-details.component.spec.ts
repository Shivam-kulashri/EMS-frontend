import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerUpdateInterviewDetailsComponent } from './interviewer-update-interview-details.component';

describe('InterviewerUpdateInterviewDetailsComponent', () => {
  let component: InterviewerUpdateInterviewDetailsComponent;
  let fixture: ComponentFixture<InterviewerUpdateInterviewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewerUpdateInterviewDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerUpdateInterviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
