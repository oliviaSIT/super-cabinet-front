import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRepositoryComponent } from './product-repository.component';

describe('ProductRepositoryComponent', () => {
  let component: ProductRepositoryComponent;
  let fixture: ComponentFixture<ProductRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
