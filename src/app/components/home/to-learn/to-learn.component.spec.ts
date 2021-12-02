import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToLearnComponent } from './to-learn.component';

describe('ToLearnComponent', () => {
  let component: ToLearnComponent;
  let fixture: ComponentFixture<ToLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
