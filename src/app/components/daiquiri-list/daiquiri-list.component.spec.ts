import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaiquiriListComponent } from './daiquiri-list.component';

describe('DaiquiriListComponent', () => {
  let component: DaiquiriListComponent;
  let fixture: ComponentFixture<DaiquiriListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaiquiriListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaiquiriListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
