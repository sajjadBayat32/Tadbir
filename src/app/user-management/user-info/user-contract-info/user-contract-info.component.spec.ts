import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContractInfoComponent } from './user-contract-info.component';

describe('UserContractInfoComponent', () => {
  let component: UserContractInfoComponent;
  let fixture: ComponentFixture<UserContractInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContractInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContractInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
