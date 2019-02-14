import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalOrderFilterComponent } from './animal-order-filter.component';

describe('AnimalOrderFilterComponent', () => {
  let component: AnimalOrderFilterComponent;
  let fixture: ComponentFixture<AnimalOrderFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalOrderFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalOrderFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
