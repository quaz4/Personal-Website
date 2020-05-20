import { Component, OnInit, Input } from '@angular/core';
import { TimelineService } from '../services/timeline.service';
import { TimelineEntry } from '../models/TimelineEntry';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() theme: string;
  @Input() title: string;
  @Input() entries: TimelineEntry[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
