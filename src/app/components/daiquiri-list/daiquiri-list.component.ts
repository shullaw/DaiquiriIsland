import { Component, OnInit } from '@angular/core';
import { DaiquiriListService } from '../../shared/services/daiquiri-list.service';

@Component({
  selector: 'app-daiquiri-list',
  templateUrl: './daiquiri-list.component.html',
  styleUrls: ['./daiquiri-list.component.scss']
})
export class DaiquiriListComponent implements OnInit {

  daiquiriList: any = [];
  ddStatus: string = "ddClosed";
  ddStyling: boolean = false;

  constructor(private daiquiriListService: DaiquiriListService) {}

  ngOnInit(): void {
    this.getGetDaiquiriList();
  }

  getGetDaiquiriList(){
    this.daiquiriList = this.daiquiriListService.getDaiquiriList();
  }

  dropDownClicked() {
    (!this.ddStyling) ? this.ddStyling = true : this.ddStyling = false;
    (this.ddStatus == 'ddClosed') ? this.ddStatus = 'ddOpened' : this.ddStatus = "ddClosed";
  }
}
