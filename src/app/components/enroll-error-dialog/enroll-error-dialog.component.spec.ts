import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollErrorDialogComponent } from './enroll-error-dialog.component';

describe('EnrollErrorDialogComponent', () => {
  let component: EnrollErrorDialogComponent;
  let fixture: ComponentFixture<EnrollErrorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollErrorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
