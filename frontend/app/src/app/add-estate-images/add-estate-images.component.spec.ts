import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstateImagesComponent } from './add-estate-images.component';

describe('AddEstateImagesComponent', () => {
  let component: AddEstateImagesComponent;
  let fixture: ComponentFixture<AddEstateImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEstateImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEstateImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
