import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('Todo Service', () => {
  beforeEachProviders(() => [TodoService]);

  it('should ...',
      inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));
});
