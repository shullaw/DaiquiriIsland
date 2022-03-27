import {Injectable} from '@angular/core';
import {teams} from '../data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() {
  }

  getTeams() {
    return teams;
  }
}