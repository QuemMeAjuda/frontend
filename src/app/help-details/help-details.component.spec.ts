import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDetailsComponent } from './help-details.component';

describe('HelpDetailsComponent', () => {
  let component: HelpDetailsComponent;
  let fixture: ComponentFixture<HelpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
