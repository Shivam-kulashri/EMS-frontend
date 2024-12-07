import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerSidebarComponent } from './interviewer-sidebar.component';

describe('InterviewerSidebarComponent', () => {
  let component: InterviewerSidebarComponent;
  let fixture: ComponentFixture<InterviewerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewerSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
