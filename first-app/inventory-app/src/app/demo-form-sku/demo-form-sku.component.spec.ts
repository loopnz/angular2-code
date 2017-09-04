import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDemoFormSkuComponent } from './demo-form-sku.component';

describe('AppDemoFormSkuComponent', () => {
  let component: AppDemoFormSkuComponent;
  let fixture: ComponentFixture<AppDemoFormSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDemoFormSkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDemoFormSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
