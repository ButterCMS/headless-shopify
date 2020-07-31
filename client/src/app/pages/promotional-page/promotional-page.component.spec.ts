import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalPageComponent } from './promotional-page.component';

describe('PromotionalPageComponent', () => {
  let component: PromotionalPageComponent;
  let fixture: ComponentFixture<PromotionalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionalPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
