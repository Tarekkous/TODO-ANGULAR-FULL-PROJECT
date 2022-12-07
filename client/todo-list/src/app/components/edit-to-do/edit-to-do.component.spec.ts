import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditToDoComponent } from './edit-to-do.component';

describe('EditToDoComponent', () => {
  let component: EditToDoComponent;
  let fixture: ComponentFixture<EditToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditToDoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
