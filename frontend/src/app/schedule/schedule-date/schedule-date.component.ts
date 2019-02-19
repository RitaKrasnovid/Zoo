import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ScheduleApiService } from '../../services/schedule.service';
import { Schedule } from '../../models';

@Component({
  selector: 'app-schedule-date',
  templateUrl: './schedule-date.component.html',
  styleUrls: ['./schedule-date.component.scss'],
  providers: [DatePipe],
})
export class ScheduleDateComponent implements OnInit {
  public scheduleData: Schedule[];
  public dateNow = new Date();

  constructor(
    private datePipe: DatePipe,
    private scheduleApiService: ScheduleApiService,
  ) { }

  ngOnInit() {
    const date = this.datePipe.transform(this.dateNow, 'yyyy-MM-dd');
    const tomorrow = this.datePipe.transform(this.dateNow.setDate(this.dateNow.getDate() + 1), 'yyyy-MM-dd');

    this.initSchedule(tomorrow) ? this.initSchedule(tomorrow) : this.initSchedule(date);
  }

  initSchedule(date) {
    this.scheduleApiService.getScheduleByDate(date).subscribe(
      (data: Schedule[]) => {
        this.scheduleData = data;
      },
      err => console.log(err),
      () => console.log('Schedule component completed')
    );
  }
}
