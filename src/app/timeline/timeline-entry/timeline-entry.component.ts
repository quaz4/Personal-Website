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

  get timeString() {
    if (!this.data.end) {
      return `${this.data.start} - Present`;
    }
  }

  ngOnInit(): void {
  }

}
