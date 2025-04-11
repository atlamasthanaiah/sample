import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableConfirmDialogComponent } from './reusable-confirm-dialog.component';

describe('ReusableConfirmDialogComponent', () => {
  let component: ReusableConfirmDialogComponent;
  let fixture: ComponentFixture<ReusableConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
