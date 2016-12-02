const todoItems = [
    { title: 'Learn TypeScript', complete: false },
];

export function list(): Array<{ title: string, complete: boolean }> {
    return todoItems;
}

export function create(item: { title: string, complete: boolean }) {
    todoItems.push(item);
}
