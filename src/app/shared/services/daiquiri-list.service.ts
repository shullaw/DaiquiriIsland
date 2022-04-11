import {Injectable} from '@angular/core';
import {daiquiriList} from '../data/daiquiri-list-data';

@Injectable({
  providedIn: 'root'
})
export class DaiquiriListService {

  constructor() {
  }

  getDaiquiriList() {
    return daiquiriList;
  }
}