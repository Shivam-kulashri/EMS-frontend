import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerMainComponent } from './interviewer-main.component';

describe('InterviewerMainComponent', () => {
  let component: InterviewerMainComponent;
  let fixture: ComponentFixture<InterviewerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewerMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
