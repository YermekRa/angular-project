import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',      icon: 'dashboard', class: '' },
    { path: '/users',     title: 'Пользователи',   icon: 'account_circle', class: '' },
    { path: '/roles',     title: 'Роли',           icon: 'admin_panel_settings', class: '' },
    { path: '/teachers',  title: 'Учителя',        icon: 'account_box', class: '' },
    { path: '/students',  title: 'Ученики',        icon: 'face', class: '' },
    { path: '/timetable', title: 'Расписание',     icon: 'pending_actions', class: '' },
    { path: '/groups',    title: 'Группы(классы)', icon: 'groups', class: '' },
    { path: '/subject',  title: 'Предметы',       icon: 'import_contacts', class: '' },
    { path: '/grade',    title: 'Типы оценок',    icon: 'filter_5', class: '' },
    { path: '/room',     title: 'Кабинеты',       icon: 'meeting_room', class: '' }
    // { path: '/user-profile', title: 'User Profile',  icon: 'person', class: '' },
    // { path: '/table-list', title: 'Table List',  icon: 'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon: 'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon: 'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon: 'location_on', class: '' },
    // { path: '/test', title: 'Test',  icon: 'person', class: '' },
    // { path: '/staffs', title: 'Сотрудники',  icon: 'people_alt', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon: 'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon: 'unarchive', class: 'active-pro' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
