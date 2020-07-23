import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderCheckoutComponent } from './new-order-checkout.component';

describe('NewOrderCheckoutComponent', () => {
  let component: NewOrderCheckoutComponent;
  let fixture: ComponentFixture<NewOrderCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewOrderCheckoutComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
