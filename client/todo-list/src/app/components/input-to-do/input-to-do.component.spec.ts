import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputToDoComponent } from './input-to-do.component';

describe('InputToDoComponent', () => {
  let component: InputToDoComponent;
  let fixture: ComponentFixture<InputToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputToDoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
