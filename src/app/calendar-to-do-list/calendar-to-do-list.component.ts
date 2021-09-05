import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/common';

@Component({
  selector: 'app-calendar-to-do-list',
  templateUrl: './calendar-to-do-list.component.html',
  styleUrls: ['./calendar-to-do-list.component.css'],
})
export class CalendarToDoListComponent implements OnInit {
  toDoItem?: string = '';
  constructor() {}

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'dayGridMonth,timeGridWeek,timeGridDay',
      center: 'title',
      right: 'prev today next',
    },
    height: 860,
    // Sets the width-to-height aspect ratio of the calendar.
    aspectRatio: 1,
    weekends: true,
    droppable: true,
    expandRows: true, //视图占满整个高度
    // dayMaxEvents: true, //日期显示的最大个数，true表示事件限制为单元格最大高度
  };
  ngOnInit(): void {}
}
