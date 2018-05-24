import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskHelpComponent } from './ask-help.component';

describe('AskHelpComponent', () => {
  let component: AskHelpComponent;
  let fixture: ComponentFixture<AskHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
