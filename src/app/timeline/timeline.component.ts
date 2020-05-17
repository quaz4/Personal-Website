import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../services/timeline.service';
import { TimelineEntry } from '../models/TimelineEntry';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public entries: TimelineEntry[];

  constructor(public timeLine: TimelineService) {
    this.entries = this.timeLine.getAll();
  }

  ngOnInit(): void {
    console.table(this.timeLine.getAll());
  }

}
