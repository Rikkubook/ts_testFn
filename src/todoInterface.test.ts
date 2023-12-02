import { describe, it, expect } from 'vitest';
import { addTodo } from './todoInterface';

describe('待辦事項管理', () => {
  it('應能將新的待辦事項添加到列表中', () => {
    const todos = [{ id: 1, task: 'Buy milk', completed: false }];
    const newTask = 'Walk the dog';
    const updatedTodos = addTodo(todos, newTask);
    expect(updatedTodos).toEqual([...todos, { id: 2, task: newTask, completed: false }]);
  });
});