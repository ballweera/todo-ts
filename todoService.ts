import { TodoItem } from './todo';

const todoItems = [
    { title: 'Learn TypeScript', complete: false },
];

export function list(): Array<TodoItem> {
    return todoItems;
}

export function create(item: TodoItem) {
    todoItems.push(item);
}
