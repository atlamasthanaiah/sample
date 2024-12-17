import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N2estimationComponent } from './n2estimation.component';

describe('N2estimationComponent', () => {
  let component: N2estimationComponent;
  let fixture: ComponentFixture<N2estimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N2estimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N2estimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
