import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionHelperComponent } from './decision-helper.component';

describe('DecisionHelperComponent', () => {
  let component: DecisionHelperComponent;
  let fixture: ComponentFixture<DecisionHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
