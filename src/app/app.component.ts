import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable } from 'rxjs';
import { Daiquiri, FadeService } from './shared/services/fade.service';
import { HoursComponent } from './hours/hours.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FadeService]
})
export class AppComponent implements AfterViewInit {
  title = 'Daiquiri Island';
  @ViewChild("main") mainComponent!: ElementRef<any>;
  animationEnd: number = 0;
  modalIsOpen: boolean = true;

  constructor(
    private modalService: NgbModal
    ) {}

  ngAfterViewInit(): void {
    this.loaded();
    this.modalService.activeInstances.subscribe((instance) => {
      this.modalIsOpen = instance.length > 0;
    });
  }

  loaded() {
    const animated = document.querySelector('body');
    animated?.addEventListener('animationend', () => {
      ++this.animationEnd;
    });
  }

}
