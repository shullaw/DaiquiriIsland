import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaiquiriCupComponent } from './daiquiri-cup.component';

describe('DaiquiriCupComponent', () => {
  let component: DaiquiriCupComponent;
  let fixture: ComponentFixture<DaiquiriCupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaiquiriCupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaiquiriCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
