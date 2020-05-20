import { Component } from '@angular/core';
import { TimelineEntry } from './models/TimelineEntry';
import { TimelineService } from './services/timeline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Will Stewart';
  experience: TimelineEntry[];
  projects: TimelineEntry[];
  certs: TimelineEntry[];

  constructor(public timeLine: TimelineService) {
    this.experience = this.timeLine.getExperience();
    this.projects = this.timeLine.getProjects();
    this.certs = this.timeLine.getCerts();
  }
}
