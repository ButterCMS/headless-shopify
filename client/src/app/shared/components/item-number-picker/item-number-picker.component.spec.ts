import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNumberPickerComponent } from './item-number-picker.component';

describe('ItemNumberPickerComponent', () => {
  let component: ItemNumberPickerComponent;
  let fixture: ComponentFixture<ItemNumberPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemNumberPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNumberPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
