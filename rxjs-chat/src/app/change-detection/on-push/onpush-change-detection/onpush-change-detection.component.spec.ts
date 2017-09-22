import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushChangeDetectionComponent } from './onpush-change-detection.component';

describe('OnpushChangeDetectionComponent', () => {
  let component: OnpushChangeDetectionComponent;
  let fixture: ComponentFixture<OnpushChangeDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnpushChangeDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnpushChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
