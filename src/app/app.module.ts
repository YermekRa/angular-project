import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {TableListComponent} from './table-list/table-list.component';
import {TypographyComponent} from './typography/typography.component';
import {IconsComponent} from './icons/icons.component';
import {MapsComponent} from './maps/maps.component';
import {NotificationsComponent} from './notifications/notifications.component';

import {
    AgmCoreModule
} from '@agm/core';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {TestComponent} from './test/test.component';
import {StaffControlComponent} from './staff-control/staff-control.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {UsersControlComponent} from './users-control/users-control.component';
import {RolesComponent} from './roles/roles.component';
import {TeachersComponent} from './teachers/teachers.component';
import {StudentsComponent} from './students/students.component';
import {DialogUserControlComponent} from './users-control/dialog-user-control/dialog-user-control.component';
import {MatDialogModule} from '@angular/material/dialog';
import {TimetableComponent} from './timetable/timetable.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {GroupsComponent} from './groups/groups.component';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EditStudentDialogComponent } from './students/edit-student-dialog/edit-student-dialog.component';
import { EditTimetableDialogComponent } from './timetable/edit-timetable-dialog/edit-timetable-dialog.component';
import { EditGroupsDialogComponent } from './groups/edit-groups-dialog/edit-groups-dialog.component';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        }),
        MatTableModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSortModule,
        MatExpansionModule,
        MatInputModule,
        MatPaginatorModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        TestComponent,
        StaffControlComponent,
        StudentsComponent,
        TimetableComponent,
        GroupsComponent,
        EditStudentDialogComponent,
        EditTimetableDialogComponent,
        EditGroupsDialogComponent


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
