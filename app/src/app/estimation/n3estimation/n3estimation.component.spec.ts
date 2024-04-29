import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N3estimationComponent } from './n3estimation.component';

describe('N3estimationComponent', () => {
  let component: N3estimationComponent;
  let fixture: ComponentFixture<N3estimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N3estimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N3estimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
