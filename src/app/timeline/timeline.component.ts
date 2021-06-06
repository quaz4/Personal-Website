import { Component, Input } from '@angular/core';
import { TimelineEntry } from '../models/TimelineEntry';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  @Input() theme: string;
  @Input() title: string;
  @Input() entries: TimelineEntry[];

  constructor() {
  }

}
