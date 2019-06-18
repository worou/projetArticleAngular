import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarService } from './services/calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projetArticleFront';
  calendarEvents: any[] = [];
  calendarPlugins = [dayGridPlugin];

  // defaultConfig: object = {
  //   header: {
  //     left: 'prev,next today',
  //     center: 'title',
  //     right: 'month,basicWeek,basicDay'
  //   },
  //   editable: true,
  //   eventLimit: true, // allow "more" link when too many events
  //   navLinks: true,
  // };


  constructor(private calendarService:  CalendarService) {}
  ngOnInit() {
    this.calendarService.getData().subscribe(data =>{
      this.calendarEvents = data;}
    );
  }
}
