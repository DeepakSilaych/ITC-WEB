import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleprojectsComponent } from './peopleprojects.component';

describe('PeopleprojectsComponent', () => {
  let component: PeopleprojectsComponent;
  let fixture: ComponentFixture<PeopleprojectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleprojectsComponent]
    });
    fixture = TestBed.createComponent(PeopleprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
