import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableSearhComponent } from './reusable-searh.component';

describe('ReusableSearhComponent', () => {
  let component: ReusableSearhComponent;
  let fixture: ComponentFixture<ReusableSearhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableSearhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableSearhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
