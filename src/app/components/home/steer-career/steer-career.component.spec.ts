import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteerCareerComponent } from './steer-career.component';

describe('SteerCareerComponent', () => {
  let component: SteerCareerComponent;
  let fixture: ComponentFixture<SteerCareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteerCareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteerCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
