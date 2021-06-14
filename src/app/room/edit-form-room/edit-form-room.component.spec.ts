import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormRoomComponent } from './edit-form-room.component';

describe('EditFormRoomComponent', () => {
  let component: EditFormRoomComponent;
  let fixture: ComponentFixture<EditFormRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
