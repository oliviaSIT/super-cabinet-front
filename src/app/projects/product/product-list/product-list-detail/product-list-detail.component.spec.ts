import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListDetail } from './product-list-detail';

describe('ProductListDetail', () => {
  let component: ProductListDetail;
  let fixture: ComponentFixture<ProductListDetail>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListDetail ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
