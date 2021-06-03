import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimetableDialogComponent } from './edit-timetable-dialog.component';

describe('EditTimetableDialogComponent', () => {
  let component: EditTimetableDialogComponent;
  let fixture: ComponentFixture<EditTimetableDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTimetableDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTimetableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
