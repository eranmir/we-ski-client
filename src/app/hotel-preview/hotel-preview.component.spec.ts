import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPreviewComponent } from './hotel-preview.component';

describe('HotelPreviewComponent', () => {
  let component: HotelPreviewComponent;
  let fixture: ComponentFixture<HotelPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
