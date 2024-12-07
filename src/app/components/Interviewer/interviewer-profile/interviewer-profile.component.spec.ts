import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerProfileComponent } from './interviewer-profile.component';

describe('InterviewerProfileComponent', () => {
  let component: InterviewerProfileComponent;
  let fixture: ComponentFixture<InterviewerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewerProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
