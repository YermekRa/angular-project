import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageableDemoUsersComponent } from './pageable-demo-users.component';

describe('PageableDemoUsersComponent', () => {
  let component: PageableDemoUsersComponent;
  let fixture: ComponentFixture<PageableDemoUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageableDemoUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageableDemoUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
