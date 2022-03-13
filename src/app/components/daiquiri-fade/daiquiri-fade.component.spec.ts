import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaiquiriFadeComponent } from './daiquiri-fade.component';

describe('DaiquiriFadeComponent', () => {
  let component: DaiquiriFadeComponent;
  let fixture: ComponentFixture<DaiquiriFadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaiquiriFadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaiquiriFadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
