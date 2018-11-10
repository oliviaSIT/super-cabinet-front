import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLookupComponent } from './order-lookup.component';

describe('OrderLookupComponent', () => {
  let component: OrderLookupComponent;
  let fixture: ComponentFixture<OrderLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
