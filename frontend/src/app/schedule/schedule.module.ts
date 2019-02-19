import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ScheduleComponent } from './schedule.component';
import { ScheduleTodayComponent } from './schedule-today/schedule-today.component';
import { ScheduleDateComponent } from './schedule-date/schedule-date.component';
import { RouterModule, Routes } from '@angular/router';

const scheduleRoutes: Routes = [
  {
    path: 'schedule',
    component: ScheduleComponent,
    children: [
      { path: '', redirectTo: 'today', pathMatch: 'full' },
      { path: 'today', component: ScheduleTodayComponent },
      { path: 'tomorrow', component: ScheduleDateComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleTodayComponent,
    ScheduleDateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forChild(scheduleRoutes),
  ],
  providers: [],
})
export class ScheduleModule { }
