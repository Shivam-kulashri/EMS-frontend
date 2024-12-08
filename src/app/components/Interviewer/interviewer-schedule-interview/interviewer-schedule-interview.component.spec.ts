import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerScheduleInterviewComponent } from './interviewer-schedule-interview.component';

describe('InterviewerScheduleInterviewComponent', () => {
  let component: InterviewerScheduleInterviewComponent;
  let fixture: ComponentFixture<InterviewerScheduleInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewerScheduleInterviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerScheduleInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
