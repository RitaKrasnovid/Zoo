import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonNewsComponent } from './common-news.component';

describe('CommonNewsComponent', () => {
  let component: CommonNewsComponent;
  let fixture: ComponentFixture<CommonNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
