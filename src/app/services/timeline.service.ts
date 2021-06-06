import { Injectable } from '@angular/core';
import { experience, projects, certs } from './data';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor() { }

  getExperience() {
    return experience;
  }

  getProjects() {
    return projects;
  }

  getCerts() {
    return certs;
  }
}
