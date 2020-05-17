import { Injectable } from '@angular/core';
import { data } from './data.js';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor() { }

  getAll() {
    return data;
  }
}
