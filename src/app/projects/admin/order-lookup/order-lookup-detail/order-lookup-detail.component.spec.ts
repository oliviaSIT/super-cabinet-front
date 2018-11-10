import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLookupDetailComponent } from './order-lookup-detail.component';

describe('OrderLookupDetailComponent', () => {
  let component: OrderLookupDetailComponent;
  let fixture: ComponentFixture<OrderLookupDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderLookupDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLookupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
