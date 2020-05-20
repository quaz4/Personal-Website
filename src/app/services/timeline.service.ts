import { Injectable } from '@angular/core';
import { data } from './data.js';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor() { }

  getExperience() {
    return data;
  }

  getProjects() {
    return data;
  }

  getCerts() {
    return data;
  }
}
