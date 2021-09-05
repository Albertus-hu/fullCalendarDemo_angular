import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarToDoListComponent } from './calendar-to-do-list.component';

describe('CalendarToDoListComponent', () => {
  let component: CalendarToDoListComponent;
  let fixture: ComponentFixture<CalendarToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarToDoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
