import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdregistrationComponent } from './stdregistration.component';

describe('StdregistrationComponent', () => {
  let component: StdregistrationComponent;
  let fixture: ComponentFixture<StdregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
