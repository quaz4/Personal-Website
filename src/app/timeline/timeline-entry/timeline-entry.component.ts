import { Component, Input } from '@angular/core';
import { TimelineEntry } from 'src/app/models/TimelineEntry';
import * as humanizeDuration from 'humanize-duration';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-timeline-entry',
  templateUrl: './timeline-entry.component.html',
  styleUrls: ['./timeline-entry.component.scss']
})
export class TimelineEntryComponent {

  @Input() data: TimelineEntry;
  @Input() theme: string;

  constructor(private lightbox: Lightbox) {
  }

  timeString(): string {
    let end: number;

    if (!this.data.end) {
      end = Date.now();
    } else {
      end = this.data.end.getTime();

    }

    return humanizeDuration(end - (this.data.start.getTime()), { units: ['y', 'mo'], round: true });
  }

  open(index: number): void {
    this.lightbox.open(this.data.images, index);
  }

  close(): void {
    this.lightbox.close();
  }

}
