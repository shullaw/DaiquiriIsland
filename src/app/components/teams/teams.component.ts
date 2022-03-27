import { Component, OnInit } from '@angular/core';
import {TeamsService} from '../../shared/services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams: any = [];

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(){
    this.teams = this.teamsService.getTeams();
  }
}
