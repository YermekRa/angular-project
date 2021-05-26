import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffControlComponent } from './staff-control.component';

describe('StaffControlComponent', () => {
  let component: StaffControlComponent;
  let fixture: ComponentFixture<StaffControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
