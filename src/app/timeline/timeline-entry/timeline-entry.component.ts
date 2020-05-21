import { Component, OnInit, Input } from '@angular/core';
import { TimelineEntry } from 'src/app/models/TimelineEntry';

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
    if (!this.data.end) {
      const deltaT = Math.floor(Date.now() / 1000) - Math.floor(this.data.start.getTime() / 1000);
    } else {
      const deltaT = Math.floor(this.data.end.getTime() / 1000) - Math.floor(this.data.start.getTime() / 1000);
    }

    // if (deltaT < )

    return '';
  }

  ngOnInit(): void {
  }

}
