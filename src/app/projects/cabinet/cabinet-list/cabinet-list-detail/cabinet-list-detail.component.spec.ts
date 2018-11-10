import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetListDetailComponent } from './cabinet-list-detail.component';

describe('CabinetListDetailComponent', () => {
  let component: CabinetListDetailComponent;
  let fixture: ComponentFixture<CabinetListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
