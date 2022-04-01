import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogScheduledShiftComponent } from './dialog-scheduled-shift.component';

describe('DialogScheduledShiftComponent', () => {
  let component: DialogScheduledShiftComponent;
  let fixture: ComponentFixture<DialogScheduledShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogScheduledShiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogScheduledShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
