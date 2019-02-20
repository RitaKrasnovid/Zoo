import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalClassFilterComponent } from './animal-class-filter.component';

describe('AnimalClassFilterComponent', () => {
  let component: AnimalClassFilterComponent;
  let fixture: ComponentFixture<AnimalClassFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalClassFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalClassFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
