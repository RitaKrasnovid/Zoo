import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalNameFilterComponent } from './animal-name-filter.component';

describe('AnimalNameFilterComponent', () => {
  let component: AnimalNameFilterComponent;
  let fixture: ComponentFixture<AnimalNameFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalNameFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalNameFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
