import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmmOfferComponent } from './dmm-offer.component';

describe('DmmOfferComponent', () => {
  let component: DmmOfferComponent;
  let fixture: ComponentFixture<DmmOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DmmOfferComponent]
    });
    fixture = TestBed.createComponent(DmmOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
