import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {TestComponent} from '../../test/test.component';
import {StaffControlComponent} from '../../staff-control/staff-control.component';
import {RolesComponent} from '../../roles/roles.component';
import {TeachersComponent} from '../../teachers/teachers.component';
import {StudentsComponent} from '../../students/students.component';
import {UsersControlComponent} from '../../users-control/users-control.component';
import {TimetableComponent} from '../../timetable/timetable.component';
import {GroupsComponent} from '../../groups/groups.component';
import {PageableDemoUsersComponent} from '../../pageable-demo-users/pageable-demo-users.component';
import {GradeComponent} from '../../grade/grade.component';
import {RoomComponent} from '../../room/room.component';
import {SubjectComponent} from '../../subject/subject.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'test',           component: TestComponent },
    { path: 'staffs',         component: StaffControlComponent },
    { path: 'users',          component: UsersControlComponent },
    { path: 'roles',          component: RolesComponent },
    { path: 'teachers',       component: TeachersComponent },
    { path: 'students',       component: StudentsComponent },
    { path: 'timetable',      component: TimetableComponent },
    { path: 'demo-pageable',  component: PageableDemoUsersComponent },
    { path: 'groups',         component: GroupsComponent },
    { path: 'grade',          component: GradeComponent },
    { path: 'room',           component: RoomComponent },
    { path: 'subject',        component: SubjectComponent }
];
