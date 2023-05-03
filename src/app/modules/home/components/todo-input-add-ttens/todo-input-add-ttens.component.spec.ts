import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputAddTtensComponent } from './todo-input-add-ttens.component';

describe('TodoInputAddTtensComponent', () => {
  let component: TodoInputAddTtensComponent;
  let fixture: ComponentFixture<TodoInputAddTtensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInputAddTtensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoInputAddTtensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
