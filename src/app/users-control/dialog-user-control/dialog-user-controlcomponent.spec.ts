import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserControlComponent } from './dialog-user-control.component';

describe('DialogContentExampleDialogComponent', () => {
    let component: DialogUserControlComponent;
    let fixture: ComponentFixture<DialogUserControlComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ DialogUserControlComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DialogUserControlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
