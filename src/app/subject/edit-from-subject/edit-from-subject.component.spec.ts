import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFromSubjectComponent } from './edit-from-subject.component';

describe('EditFromSubjectComponent', () => {
  let component: EditFromSubjectComponent;
  let fixture: ComponentFixture<EditFromSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFromSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFromSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
