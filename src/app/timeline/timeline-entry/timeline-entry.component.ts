import { Component, OnInit, Input } from '@angular/core';
import { TimelineEntry } from 'src/app/models/TimelineEntry';
import * as moment from 'moment';

@Component({
  selector: 'app-timeline-entry',
  templateUrl: './timeline-entry.component.html',
  styleUrls: ['./timeline-entry.component.scss']
})
export class TimelineEntryComponent implements OnInit {

  @Input() data: TimelineEntry;
  @Input() theme: string;

  constructor() { }

  get timeString(): string {
    const start = moment(this.data.start);

    let end;

    if (!this.data.end) {
      end = moment(Date.now());
    } else {
      end = moment(this.data.end);
    }

    const diffInMilliSeconds = end.diff(start);

    const duration = moment.duration(diffInMilliSeconds);

    const years = duration.years();
    const months = duration.months();

    let rVal = '';

    if (years === 1) {
      rVal = rVal + '1 year';
    } else if (years > 1) {
      rVal = rVal + years + ' years';
    }

    if (years > 0) {
      rVal = rVal + ', ';
    }

    if (months === 1) {
      rVal = rVal + '1 month';
    } else if (months > 1) {
      rVal = rVal + months + ' months';
    }

    return rVal;
  }

  ngOnInit(): void {
  }

}
