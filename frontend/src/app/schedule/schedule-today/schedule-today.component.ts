import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ScheduleApiService } from '../../services/schedule.service';
import { Schedule } from '../../models';


@Component({
  selector: 'app-schedule-today',
  templateUrl: './schedule-today.component.html',
  styleUrls: ['./schedule-today.component.scss'],
  providers: [DatePipe],
})
export class ScheduleTodayComponent implements OnInit {
  public scheduleData: Schedule[];
  public dateNow = new Date();

  constructor(
    private datePipe: DatePipe,
    private scheduleApiService: ScheduleApiService,
  ) { }

  ngOnInit() {
    const date = this.datePipe.transform(this.dateNow, 'yyyy-MM-dd');

    this.scheduleApiService.getScheduleByDate(date).subscribe(
      (data: Schedule[]) => {
        this.scheduleData = data;
      },
      err => console.log(err),
      () => console.log('Schedule component completed')
    );
  }

}
