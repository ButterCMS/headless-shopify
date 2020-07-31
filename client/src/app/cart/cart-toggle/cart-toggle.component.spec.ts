import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartToggleComponent } from './cart-toggle.component';

describe('CartToggleComponent', () => {
  let component: CartToggleComponent;
  let fixture: ComponentFixture<CartToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
