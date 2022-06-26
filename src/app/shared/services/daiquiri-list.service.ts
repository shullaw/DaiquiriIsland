import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import {Daiquiri, daiquiriList} from '../data/daiquiri-list-data';

@Injectable({
  providedIn: 'root'
})
export class DaiquiriListService {

  initClick = false;

  constructor() {
  }

  getDaiquiriList(): Observable<Daiquiri[]> {
    return of(daiquiriList);
  }

  init(){
    return of(this.initClick);
  }
}