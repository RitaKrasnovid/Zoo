import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTodayComponent } from './schedule-today.component';

describe('ScheduleTodayComponent', () => {
  let component: ScheduleTodayComponent;
  let fixture: ComponentFixture<ScheduleTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
