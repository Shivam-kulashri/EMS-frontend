import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerUpdateApplicationComponent } from './interviewer-update-application.component';

describe('InterviewerUpdateApplicationComponent', () => {
  let component: InterviewerUpdateApplicationComponent;
  let fixture: ComponentFixture<InterviewerUpdateApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewerUpdateApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerUpdateApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
