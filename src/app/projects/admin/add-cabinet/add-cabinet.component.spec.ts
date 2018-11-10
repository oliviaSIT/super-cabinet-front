import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCabinetComponent } from './add-cabinet.component';

describe('AddCabinetComponent', () => {
  let component: AddCabinetComponent;
  let fixture: ComponentFixture<AddCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
