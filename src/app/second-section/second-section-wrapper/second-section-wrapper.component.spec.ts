import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSectionWrapperComponent } from './second-section-wrapper.component';

describe('SecondSectionWrapperComponent', () => {
  let component: SecondSectionWrapperComponent;
  let fixture: ComponentFixture<SecondSectionWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSectionWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSectionWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
