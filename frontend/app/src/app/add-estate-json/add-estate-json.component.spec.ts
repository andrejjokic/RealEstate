import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstateJsonComponent } from './add-estate-json.component';

describe('AddEstateJsonComponent', () => {
  let component: AddEstateJsonComponent;
  let fixture: ComponentFixture<AddEstateJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEstateJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEstateJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
