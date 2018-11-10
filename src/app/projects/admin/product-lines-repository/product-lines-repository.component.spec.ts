import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLinesRepositoryComponent } from './product-lines-repository.component';

describe('ProductLinesRepositoryComponent', () => {
  let component: ProductLinesRepositoryComponent;
  let fixture: ComponentFixture<ProductLinesRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLinesRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLinesRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
