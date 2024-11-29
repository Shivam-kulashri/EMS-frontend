import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrMainComponent } from './hr-main.component';

describe('HrMainComponent', () => {
  let component: HrMainComponent;
  let fixture: ComponentFixture<HrMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
