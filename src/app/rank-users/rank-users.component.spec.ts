import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankUsersComponent } from './rank-users.component';

describe('RankUsersComponent', () => {
  let component: RankUsersComponent;
  let fixture: ComponentFixture<RankUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
